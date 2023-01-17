/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado 
 * privado a través de un hook, y además poder modificarlo
 */

import React, {useState} from 'react'

const Ejemplo1 = () =>{

    // VALOR INICIAL PARA UN CONTADOR
    const valorInicial = 0

    // VALOR INICIAL PARA UNA PERSONA 
    const personaInical = {
        nombre : 'Darwin',
        email : 'darwin@gmail.com'
    }

    /** 
     ** QUEREMOS QUE LA VARIABLE VALORINICAIL Y PERSONAINICIAL SEAN PARTE DEL
     ** ESTADO DEL COMPONENTE PARA ASI PODER GESTIONAR SU CAMBIO Y QUE ESTE SE 
     ** VEA REFLEJADO EN LA VISTA DEL COMPONENTE
     * 
     * ? const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

        const [contador, setContador] = useState(valorInicial);
        const [persona, setPersona] = useState(personaInical);

    /**
     **  Función para actualizar el estado privado del contador
     * 
    */
   function incrementarContador(){
        //? funtion para cambiar el nuevoValor
        setContador(contador + 1)

   }

   /**
    ** Función para actualizar el estado de persona en el componente
    */
   function actualizarPersona(){
    setPersona(
        {
            nombre : 'pepe',
            email : 'pepe@gmail.com'
        }
    )
   }

    return (
        <div>
            <h1>*** Ejemplo de useState()</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona: </h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>

        </div>
    )
}

export default Ejemplo1