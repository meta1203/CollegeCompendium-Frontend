// dynamically swap between local dev and production REST API
// TODO: change to real endpoint
const API_BASE = document.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://tcfc.us.to/cc_api';

export default {
  get: function(endpoint) {
    return fetch(API_BASE + endpoint, {
      headers: {
        // TODO: add authentication header (probably JWT)
      }
    });
  },
};