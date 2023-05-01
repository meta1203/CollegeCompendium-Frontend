import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// dynamically swap between local dev and production REST API
// TODO: change to real endpoint
const API_BASE = document.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://tcfc.us.to/cc_api';

// build an observer pattern as described by
// https://stackoverflow.com/questions/57602715/react-custom-hooks-fetch-data-globally-and-share-across-components
// to prevent an avalanche of requests to GET /student

let globalUser = {};
let observers = [];

function setUser(newUser) {
  globalUser = newUser;
  observers.forEach(update => update(newUser));
}

export default function useAPI() {
  const [userState, setUserState] = useState(globalUser);
  const {
    isLoading, isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  // load the user from the backend
  useEffect(() => {
    if (isLoading || !isAuthenticated) return;

    observers.push(setUserState);

    if (Object.keys(globalUser).length === 0) {
      getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      }).then(resp => {
        if (resp.ok) {
          // user object is valid, so just set it
          resp.json().then(remoteUser => setUser(remoteUser));
        } else if (resp.status === 404) {
          resp.json().then(remoteUser => {
            // user object is incomplete, so
            // copy it over and set `incomplete`
            remoteUser.incomplete = true;
            setUser(remoteUser);
          });
        } else {
          console.error(resp);
        }
      });
    }

    return () => {
      observers = observers.filter(update => update !== setUserState);
    };

  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  function isFavorite(id) {
    if ((typeof userState.approved) !== "undefined") return false;
    for (let c of userState.favoriteColleges) {
      if (c.id === id) return true;
    }
    return false;
  }

  // build API hook object
  return {
    // user object should always reflect what the
    // server has on its side
    user: userState,

    updateStudent: async function (studentObj) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/student", {
          method: "PUT",
          body: JSON.stringify(studentObj),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      }).then(resp => {
        if (!resp.ok) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      }).then(remoteStudent => {
        setUser(remoteStudent);
        return remoteStudent;
      });
    },

    createStudent: async function (studentObj) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/student", {
          method: "POST",
          body: JSON.stringify(studentObj),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      }).then(resp => {
        if (!resp.ok) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      }).then(remoteStudent => {
        setUser(remoteStudent);
        return remoteStudent;
      });

    },

    createAdmin: async function (caObj) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/collegeAdmin", {
          method: "POST",
          body: JSON.stringify(caObj),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      }).then(resp => {
        if (!resp.ok) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      }).then(remoteAdmin => {
        setUser(remoteAdmin);
        return remoteAdmin;
      });
    },

    updateCollege: async function (collegeObject) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/collegeAdmin/college", {
          method: "PUT",
          body: JSON.stringify(collegeObject),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      }).then(resp => {
        if (!resp.ok) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      }).then(remoteCollege => {
        setUser({
          ...userState,
          college: remoteCollege
        });
        return remoteCollege;
      });
    },

    searchCollegeForName: async function (collegeName) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/search/colleges?name=" + collegeName, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
      }).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    searchCollegesNearby: async function (distance) {
      return getAccessTokenSilently().then(token => {
        return fetch(API_BASE + "/search/colleges/distance/" + distance, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
      }).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    searchCollegeForId: async function (collegeId) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/search/college/" + collegeId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    searchCollegeForMajor: async function (majorId) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/search/colleges/major?id=" + majorId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    searchMajorsForName: async function (majorName) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/search/majors?name=" + majorName, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    searchMajorForId: async function (majorId) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/search/major?id=" + majorId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    addDegreeToCollege: async function (degreeObj) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/collegeAdmin/college/degree", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(degreeObj)
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      });
    },

    approveOtherAdmin: async function (email) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/collegeAdmin/approve/" + email, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 404) alert("Email not found.");
        else if (resp.status === 200) alert("Successfully approved " + email);
        else alert(`Invalid response ${resp.status}`);
      });
    },

    removeDegreeFromCollege: async function (degreeId) {
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/collegeAdmin/college/degree/" + degreeId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (resp.status === 500) throw new Error(`Invalid response ${resp.status}`);
      });
    },

    isFavorite,

    toggleFavorite: async function (degreeId) {
      const isFav = isFavorite(degreeId);
      return getAccessTokenSilently().then(token =>
        fetch(API_BASE + "/student/favorite/" + degreeId, {
          method: isFav ? "DELETE" : "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        })
      ).then(resp => {
        if (!resp.ok) throw new Error(`Invalid response ${resp.status}`);
        return resp.json();
      }).then(s => {
        setUser(s);
        return s;
      });
    }
  };
}