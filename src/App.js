import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import { useAuth0 } from '@auth0/auth0-react';
import useAPI from './useAPI';

import './App.scss';

function App() {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  const {user} = useAPI();

  // wait for auth0 to load
  if (isLoading) {
    return "...";
  }

  // force login if not
  if (!isAuthenticated) {
    loginWithRedirect();
    return "...";
  }

  if (Object.keys(user).length === 0) {
    return "...";
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
