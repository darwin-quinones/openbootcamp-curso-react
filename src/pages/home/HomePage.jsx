import React from 'react';
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>

            <button onClick={ () => navigate('/profile')}>
                Go to profile
            </button>

            <button onClick={ () => navigate(-1) }>
                Go back
            </button>
        </div>
    );
}

export default HomePage;
