/**
 * Ejemplo de uso de metodo componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */


import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuándo el componenente recibe nuevos props o ha sifrido nuevos cambios en su estado privado')
    }


    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () =>{

    //* Se ejecuta cada vez que detecta un cambio puesto que no tiene []
    useEffect(() => {
        console.log('Comportamiento cuándo el componenente recibe nuevos props o ha sifrido nuevos cambios en su estado privado')
    });

    return(
        <div>
            <h1>DidMountHook</h1>
        </div>
    )
}

