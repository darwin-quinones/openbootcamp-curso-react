import React from "react";
import { useNavigate } from 'react-router-dom'

const NotFounPage = () =>{

    const navigate = useNavigate()

    return(
        <div>
            <h1>404 - Page not found :( </h1>
            <button onClick={ () => navigate('/') }>
                Go back to Home 
            </button>
        </div>
    )
}

export default NotFounPage