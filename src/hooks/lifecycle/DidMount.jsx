/**
 * Ejemplo de uso del método 
 * de un ciclo de vida de un componente de clase y el
 *  hook de un ciclo de vida en un componenete funcional
 */

import React, {Component, useEffect} from 'react'


export class DidMount extends Component{

    componentDidMount(){
        console.log('Compórtamiento antes de que el componente sea añadido al DOM (renderizarce)')
    }

    render(){
        return(
            <div>
                <h1>DidMount</h1>
            </div>
        )
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añaido al DOM(Renderizado)')
    }, []);


    return(
        <div>
            <h1>DidMountHook</h1>
        </div>
    )
}