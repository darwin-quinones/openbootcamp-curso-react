import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Darwin');

    /** 
     * Example of a @function that is call from
     * the child component 
     * 
     */

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    /**
     * Update name
    */
   function updateName(newName){
        setName(newName)
   }

    return (
        <div style={{ background:'tomato', padding:'10px' }}>
            <Child name={ name } send={ showMessage } update={ updateName }></Child>
        </div>
    );
}

export default Father;
