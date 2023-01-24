import React, {useState, useEffect} from 'react';

const ClockHook = (props) => {
    const personaInicial = {
        fecha : new Date(),
        edad : 0,
        nombre : 'Darwin',
        apellidos : 'Quiñones Sanchez'
    }

    const [persona, setPersona] = useState(personaInicial);

    useEffect(() => {
        console.log('Se crea el componente. Se ejecuta justo al montaje del componente, antes de renderizarlo')
        
        const intervalID = setInterval(() =>{
            setPersona(
                {
                    fecha: new Date(),
                    edad: persona.edad + 1,
                    nombre: persona.nombre,
                    apellidos: persona.apellidos
                }
            )
        }, 1000)


        return () => {
            console.log('WillUnmount: Se ejecuta justo antes de desaparecer')
            clearInterval(intervalID)
        };
    }, [persona]);


    return (
        <div>
            <h1>Nombre del componente: {props.componente}</h1>
            <h2>Hora actual: {persona.fecha.toLocaleTimeString()}</h2>
            <h3>{persona.nombre + ' '+ persona.apellidos}</h3>
            <h3>Edad: {persona.edad}</h3>
        </div>
    );
}

export default ClockHook;
