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
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Aprendizado from './pages/Aprendizado/Aprendizado';
import Dashboard from './pages/Dashboard/Dashboard';
import JogoQuiz from './games/JogoQuiz';
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
     <AuthProvider value={{ user }}> 
     <BrowserRouter>
      <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={!user ? <Login/> : <Navigate to="/home"/>}/>
            <Route path='/registrar' element={!user ? <Register/> : <Navigate to="/home"/>}/>
            <Route path='/aprendizado' element={user ? <Aprendizado/> : <Navigate to="/login"/>}/>
            <Route path='/Dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
            <Route path='/jogoquiz' element={user ? <JogoQuiz/> : <Navigate to="/login"/>}/>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
