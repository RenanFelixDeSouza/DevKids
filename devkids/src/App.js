import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//context
import {AuthProvider} from "./context/AuthContent"

import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/login';

//pages

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()


  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  //barra de carregamento da página. usar algum efeito css diferente nessa parte
  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
     <AuthProvider value={user}>
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
      <Footer/>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
