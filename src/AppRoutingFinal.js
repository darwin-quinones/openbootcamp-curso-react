// SESSION OF REACT-ROUTER-DOM

import React, {useEffect, useState} from "react";


import { BrowserRouter as Router, Route, Switch, useParams, Redirect} from "react-router-dom";
import LoginPage from './pages/auth/LoginPage.jsx'
import DashBoardPage from "./pages/dashboard/DashBoardPage.jsx";
import NotFoundPage from './pages/404/NotFoundPage.jsx'



function AppRoutingFinal() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true
  
  return (
    // Aqui es donde iran nuestras rutas
    <Router>
      {/* Route Switch */}
      <Switch>
      {/* REDIRECCIONS TO PROTECT OUR ROUTES */}
        <Route exact path="/" >
        {
          loggedIn ? 
          (<Redirect from='/' to='/dashboard'/>)
          :
          (<Redirect from='/' to='/login'/>)
        }
        </Route>
        {/* LOGIN ROUTE */}
        <Route exact path="/login" component={ LoginPage } />

        {/* Dashboar Route */}
        <Route exact path="/dashboard" >
        {
          loggedIn ? 
          (<DashBoardPage />)
          :
          (<Redirect from='/' to='/login'/>)
        }
        </Route>

        {/* Not found page */}
        <Route component={NotFoundPage}/>
      </Switch>


    </Router>
     
  );
}

export default AppRoutingFinal;
