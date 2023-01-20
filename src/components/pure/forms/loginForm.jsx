/**
 * Componente que va a tener un formulario para la autentificación de usuarios
 */


import React, {useState, useEffect} from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials);
    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
