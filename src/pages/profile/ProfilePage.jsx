import React from 'react';

import { useNavigate } from 'react-router-dom'

const ProfilePage = ( { }) => {

    const navigate = useNavigate()


    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigate('/task')}>
                Tasks 
            </button>

            <button onClick={ () => navigate(-1) }>
                Go back
            </button>
        </div>
    );
}

export default ProfilePage;
