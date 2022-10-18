import './App.css';

import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/login';

//pages

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
