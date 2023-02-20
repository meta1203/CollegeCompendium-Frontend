import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper" id="main-wrapper">
        <Header />
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
