/**
 * Ejemplo para entender el uso de prop.clindren
 * La idea de este componente es que pinte los valores que se le pasen desde el padre
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>***Ejemplo de CLINDREN PROPS***</h1>
            <h2>
                Nombre: {props.nombre}
            </h2>
            {/* 
                props.children pintara por defecto aquello que se adentre en las etiquetas 
                de apertura y cierre de este componente desde el componente de orden superior
            */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;



