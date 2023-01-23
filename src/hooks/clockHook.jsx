import React, {useState} from 'react';

const ClockHook = () => {
    const personaInicial = {
        fecha : new Date(),
        edad : 0,
        nombre : 'Darwin',
        apellidos : 'Quiñones Sanchez'
    }

    const [persona, setPersona] = useState(personaInicial);

    function actualiarPersona(){
        setPersona(
            {
                fecha : 
            }
        )
    }

    return (
        <div>
            
        </div>
    );
}

export default ClockHook;
