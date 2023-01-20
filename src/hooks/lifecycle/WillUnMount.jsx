/**
 * Ejemplo de uso del método componentWillUnMount para componente clase
 * Y ejemplo de uso de hooks para componente funcional
 * (Cuándo el componente va a desaparecer)
 */

import React, {Component, useEffect} from 'react';

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render(){
        return(
            <div>
                <h1>componentWillUnMount</h1>
            </div>
        )
    }

}

export const WillUnMountHook = () =>{

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente')
        }
    }, []);

    return(
        <div>
            <h1>ComponentWillUnMount hook</h1>
        </div>
    )
}