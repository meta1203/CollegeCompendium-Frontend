import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import API from './API';

import './App.scss';

function App() {
  let {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  // wait for auth0 to load
  if (isLoading) {
    console.log("got loading state: " + isLoading);
    setTimeout(() => console.log("still " + isLoading + "?"), 5000);
    return "...";
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  } else {
    API.setTokenProvider(getAccessTokenSilently);
  }

  return (
    <BrowserRouter>
      <Auth0Provider
        domain='dev-yrjc5x2ila2084mu.us.auth0.com'
        clientId='fGEfhQw23cfGNHhZQSxd7PrLBgbckdY6'
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <div className="main-wrapper" id="main-wrapper">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
