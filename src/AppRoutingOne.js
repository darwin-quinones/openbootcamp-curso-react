// SESSION OF REACT-ROUTER-DOM

import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage.jsx";
import NotFoundPage from "./pages/404/NotFoundPage.jsx";
import AboutPage from "./pages/about-faqs/AboutPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import TasksPage from "./pages/tasks/TasksPage.jsx";
import TaskDetailPage from "./pages/tasks/TaskDetailPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import StatePage from "./pages/home/StatePage.jsx";

function AppRoutingOne() {
  //const {logged, setLogged} = useState('')
  // SESSION OF REACT-ROUTER-DOM
  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My first task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second task",
    },
  ];

  // useEffect(() =>{
  //   logged = localStorage.getItem('credentials');
  //   if(logged)
  //   console.log('User Logged? :' + logged)
  // }, [])
  let logged = false;
  useEffect(() =>{
   logged = localStorage.getItem('credentials');
   console.log('User logged: ', logged)
  },[])

  return (
    // Aqui es donde iran nuestras rutas
    <Router>
      <div>
        <aside>
          <Link to="/">|| Home |</Link>
          <Link to="/about"> About </Link>
          <Link to="/faqs">| FAQs ||</Link>
          <Link to="/profile">| Profile ||</Link>
          <Link to="/any404">| Not Found ||</Link>
          <Link to="/login">|| Login |</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/login" component={ LoginPage } >
              {
                logged ?
                () =>{
                  alert('You are logged in. Redirecting to home...')
                  return <Redirect to='/'/>
                }
                :() =>{
                  return (<LoginPage/>)
                }
              }
            </Route>
            <Route exact path="/profile" component={ ProfilePage } >
              {
                logged ? 
                <ProfilePage/>
                :
                () =>{
                  alert('You must be logged in. Redirecting to login...')
                  return <Redirect to='/login'/>
                }
                
              }
            </Route>
            <Route path="/(about|faqs)" component={ AboutPage } />
            <Route path="/tasks" component={ TasksPage }/>
            <Route exact 
            path="/task/:id"
            render={
                ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}/>)
              }
            />

            {/* 404 - PAGE NOT FOUNT */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
