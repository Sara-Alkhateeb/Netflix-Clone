// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componants/Home/Home';
import { Route, Routes } from 'react-router-dom';
import FavList from './Componants/FavList/FavList';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
