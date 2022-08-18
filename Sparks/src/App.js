
import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Create from './components/Create';
import Navbar from './components/Navbar';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import Login from './components/Login';


function App() {
  
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/list' element={<ListUser/>}/>
        <Route path='/edit' element={<EditUser/>}/>
      </Routes>
    </Router>

   
  );
}

export default App;
