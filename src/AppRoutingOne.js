// SESSION OF REACT-ROUTER-DOM

import React, {useEffect, useState} from "react";

import { BrowserRouter as Router, Link, Route, Switch, useParams, Redirect} from "react-router-dom";

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

  let logged = false
  let params = useParams()
  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task',
    }
  ]



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
          <Link to="/task/1">| Task 1 |</Link>
          <Link to="/task/2">| Task 2 |</Link>
          <Link to="/any404">| No found |</Link>
          <Link to='login'>Login</Link>
        </aside>
        <main>
          <Switch>
            <Route path="/" component={ HomePage } />
            <Route path="/online-state" component={ StatePage } />
            <Route path='/login' 
            component={ HomePage }>
            {
              logged ? 
              (<Redirect to='/home'/>)
              : 
              (<LoginPage/>) 
            }
            </Route>
  
            {/* make to routes with same component */}
            {["/about", "/faqs"].map((path) => (
              <Route key={path} path={path} component={ AboutPage } />
            ))}

            {/* profile */}
            <Route 
            path='/profile' 
            component={ ProfilePage }>
              {
                logged ? 
                <ProfilePage/>
                :
                () => {
                  alert('You must be logged in. Redirecting to home...')
                  return(<Redirect to='/login'/>)
                }
              }
            </Route>

            <Route path='/tasks' component={ TasksPage } />
            <Route 
            // PASAR DATOS EN LA RUTA O PARAMETROS
            path='/task/:id' 
            exact
            render={
              ({match}) => (<TaskDetailPage task={taskList[match.params.id-1]} />)
            }
           
            >
            </Route>

            {/* 404 - Page no found */}
            <Route path="*" component={ NotFoundPage } /> 
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
