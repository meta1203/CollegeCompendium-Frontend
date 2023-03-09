import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// dynamically swap between local dev and production REST API
// TODO: change to real endpoint
const API_BASE = document.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://tcfc.us.to/cc_api';

export default function useAPI() {
  const [user, setUser] = useState(null);
  const {
    isLoading, isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  // load the user from the backend
  useEffect(() => {
    if (isLoading || !isAuthenticated) return;

    getAccessTokenSilently().then(token => {
      return fetch(API_BASE + "/student", {
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

  }, [isLoading, isAuthenticated, getAccessTokenSilently]);

  // build API hook object
  return {
    // user object should always reflect what the
    // server has on its side
    user,

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
  };
}