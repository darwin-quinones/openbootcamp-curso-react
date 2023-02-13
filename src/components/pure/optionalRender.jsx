import React, {useState} from 'react';

let red = 0
let green = 200
let blue = 150

// ? Estilo para usarlo logueado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
}
// ? Estilo para usuario no logeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}



// Login // Logout buttons components
const LoginButton = ({loginAction, propStyle}) =>{
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) =>{
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNmessages] = useState(0)

    // const updateAccess = () =>{
    //     setAccess(!access);
    // }

    const loginAction = () =>{
        setAccess(true)
    }
    const logoutAction = () =>{
        setAccess(false)
    }

    // ? (Expresion true) && expresion => se renderiza la expresion
    // ? (Expresion false) && expresion => no se renderiza la expresion


    let optionalButton

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    let addMessages = () => {
        setNmessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional button */}
            { optionalButton}

            {/* N messages unread --- caso de operador condicional if else */}
            {/* { nMessages > 0  && nMessages === 1 &&<p>You have {nMessages} new message ...</p>}
            { nMessages > 1 && <p>You have {nMessages} new messages ...</p>}
            { nMessages === 0 && <p>No new messages ...</p>} */}

            {/* Ternay operator */}

            {access ? (
                <div>
                    {nMessages > 0 ? 
                        <p>You have {nMessages} new message{nMessages > 1 ? 's' : null} ...</p>
                        :
                        <p>No new messages ...</p>
                    }
                    <button onClick={addMessages}> {nMessages > 0 ? 'Add new Message' : 'Add your firts message'}</button>
                </div>
                ) : null
            }
        </div>
    );
}

export default OptionalRender;
