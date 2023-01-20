/**
 * Componente que va a tener un formulario para la autentificación de usuarios
 */


import React, {useState, useEffect} from 'react';

const RegisterForm = () => {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData);
    
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
