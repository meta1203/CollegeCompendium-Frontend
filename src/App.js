import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import { useAuth0 } from '@auth0/auth0-react';
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
    return "...";
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  } else {
    API.setTokenProvider(getAccessTokenSilently);
  }

  return (
    <div className="main-wrapper" id="main-wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
