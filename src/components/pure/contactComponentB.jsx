import React,  {useState} from 'react';
import PropTypes from 'prop-types';
// import { Contact } from '../../models/contact.class';

const ContactComponentB = ({connection}) => {


    var [connected, setconnected] = useState(connection)
    //console.log(connection)
    const changeState = () =>{
        if(connected === false){setconnected(connected = true)}
        else{setconnected(connected = false)}
    }
    return (
        <div>
        {/* {console.log(connected)} */}
            <h3>Estado de conexión: {connected === true ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
            {(connected === true)? <button onClick={changeState}>Desconectarse</button> : <button onClick={changeState}>Conectarse</button>}
                
        </div>
    );
};


ContactComponentB.propTypes = {
    connection: PropTypes.bool
};


export default ContactComponentB;
