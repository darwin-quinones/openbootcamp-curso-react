import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

// Components
import HomePage from '../src/pages/home/HomePage.jsx'
import LoginPage from '../src/pages/auth/LoginPage.jsx'
import NotFoundPage from '../src/pages/404/NotFoundPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx';
import TasksPage from './pages/tasks/TasksPage.jsx';

const AppRoutingExercise = () => {

    const loggedIn = false

    return (
        <Router>

            <aside>
            <Link to='/'>||Home|</Link>
            <Link to='/login'>|Login|</Link>
            <Link to='/register'>|Register|</Link>
            <Link to='/tasks'>|Tasks||</Link>

            </aside>
            <main>
                {/* Switch Routes */}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/login' component={ LoginPage } />
                    <Route exact path='/register' component={ RegisterPage } />
                    {/* Protected route */}
                    <Route exact path='/tasks' component={ TasksPage } >
                        {
                            loggedIn ? 
                            <TasksPage/>
                            :
                            () => {
                                alert('You must be first logged to see yours tasks. Redirecting to home....')
                                return (<Redirect to='/login'/>)
                            }
                            
                        }
                    </Route>


                    <Route component={ NotFoundPage  } />

                </Switch>



            </main>


        </Router>


    );
}

export default AppRoutingExercise;
