import React,  {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/task.css'

const ContactComponentB = ({connection, contact}) => {


    // var [connected, setconnected] = useState(connection)
    // //console.log(connection)
    // const changeState = () =>{
    //     if(connected === false){setconnected(connected = true)}
    //     else{setconnected(connected = false)}
    // }

    function contactStatusIcon(){
        if(contact.connected){
            return(<i className='bi bi-toggle-on task-action ' style={{color: 'green', fontSize: '25px'}}></i>)
        }else{
            return(<i className='bi bi-toggle-off task-action ' style={{color: 'green', fontSize: '25px'}}></i>)
        }
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.lastname}</td>
            <td>{contact.email}</td>
            <td>
            {contactStatusIcon()}
            </td>
            <td>
               
                <i className='bi bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>
    );
};


ContactComponentB.propTypes = {
    // connection: PropTypes.bool
    contact : PropTypes.instanceOf(Contact).isRequired,

};


export default ContactComponentB;
