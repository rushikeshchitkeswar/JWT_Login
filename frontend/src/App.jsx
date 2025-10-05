import {Navigate,Route,Routes} from 'react-router';
import Login from './Pages/Login';
import './App.css'
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import RefrshHandler from './Pages/RefrshHandler';
import { useState } from 'react';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<PrivateRoute element={<Home />} />}/>

      </Routes>
      
    </div>
  )
}

export default App
