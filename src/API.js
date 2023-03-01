// dynamically swap between local dev and production REST API
// TODO: change to real endpoint
const API_BASE = document.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://tcfc.us.to/cc_api';

const tokenParams = {
  authorizationParams: {
    audience: '<our api endpoint>',
    scope: 'read'
  }
};

export default {
  // save login token
  tokenProvider: null,
  setTokenProvider: function(tokenProvider) {
    this.tokenProvider = tokenProvider;
  },

  get: async function(endpoint) {
    const token = await this.tokenProvider(tokenParams);
    return fetch(API_BASE + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
  },
};