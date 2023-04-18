import React from 'react';

import { login } from '../../services/axiosCRUDService.js'

const AxiosCRUDExample = () => {


    const authUser = async () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                if(response.data.token){
                    alert( JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)
                }else{
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login Done'))
    }


    return (
        <div onClick={ () => authUser()}>
            <button>Login</button>
        </div>
    );
}

export default AxiosCRUDExample;
