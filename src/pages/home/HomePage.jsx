import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'


const HomePage = () => {
    const navigate = useHistory();
    const location = useLocation();

    console.log("we're in Route", location.pathname);
    const navigateProps = (path) =>{}

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>

            <button onClick={ () => navigate.push('/profile')}>
                Go to profile
            </button>

            <button onClick={ () => navigate.goBack() }>
                Go back
            </button>
        </div>
    );
}

export default HomePage;
