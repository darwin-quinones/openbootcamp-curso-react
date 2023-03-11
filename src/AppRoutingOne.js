// SESSION OF REACT-ROUTER-DOM

import React, {useEffect, useState} from "react";

import { BrowserRouter as Router, Link, Route, Routes, Navigate} from "react-router-dom";

import HomePage from "./pages/home/HomePage.jsx";
import NotFoundPage from "./pages/404/NotFoundPage.jsx";
import AboutPage from "./pages/about-faqs/AboutPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import TasksPage from "./pages/tasks/TasksPage.jsx";
import TaskDetailPage from "./pages/tasks/TaskDetailPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

function AppRoutingOne() {
  //const {logged, setLogged} = useState('')

  let logged = false
  useEffect(() =>{

    logged = localStorage.getItem('credentials');
    if(logged)
    console.log('User Logged? :' + logged)
  }, [])
  
  return (
    // Aqui es donde iran nuestras rutas
    <Router>
      <div>
        <aside>
          <Link to="/">| HOME</Link>
          <Link to="/about">| ABOUT</Link>
          <Link to="/faqs">| FADs |</Link>
          <Link to="/any404">| No found |</Link>
          <Link to='login'>Login</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path='/login' 
            element={ 
              logged ? 
              (<Navigate replace to='/home'/>)
              : 
              (<LoginPage/>) 
            }
            />
  
            {/* make to routes with same component */}
            {["/about", "/faqs"].map((path) => (
              <Route key={path} path={path} element={ <AboutPage/> } />
            ))}

            {/* profile */}
            <Route 
            path='/profile' 
            element={
                logged ? (<ProfilePage/>)
                : 
                
                  <Navigate replace to='/login'/> 
               
              }
             />

            <Route path='/tasks' element={ <TasksPage /> } />
            <Route path='/task/:id' element={ <TaskDetailPage/>} />

            {/* 404 - Page no found */}
            <Route path="*" element={ <NotFoundPage/> } /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
