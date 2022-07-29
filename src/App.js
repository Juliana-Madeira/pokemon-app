import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Outlet/>
    </div>
  );
}

export default App;
