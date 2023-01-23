import React, {useState} from 'react';


//* Definiendo estilos enconstantes

//? Estilos para usuario logeado
const loggedStyle = {
    color: 'white'
}

//? Estilos para usuario no logeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // * Generamos un estado para el componente y
    //* asi controlar si en usuario está loguado o no

    const [logged, setLogged] = useState(false);
    const greetingLogged = <p>Hola, {props.name}</p>
    const pleaseLogin = <p>Please Login</p>

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
        {logged ? 
            (greetingLogged) 
            : 
            (pleaseLogin)
        }
            <button onClick={() =>{
                console.log('Botón pulseado')
                setLogged(!logged)
                console.log(logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
