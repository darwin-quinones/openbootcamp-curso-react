import React,  {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/task.css'

const ContactComponentB = ({state, remove, contact}) => {

    // make control of the changes
    useEffect(() =>{
        console.log('contact created')
        return() =>{
            console.log(`Contact ${contact.name} is going to unmound`)
        }
    }, [contact])
   

    function contactStatusIcon(){
        if(contact.connected){
            return(<i onClick={() => state(contact)} className='bi bi-toggle-on task-action ' style={{color: 'green', fontSize: '25px'}}></i>)
        }else{
            return(<i onClick={() => state(contact)} className='bi bi-toggle-off task-action ' style={{color: 'green', fontSize: '25px'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='align-middle'>{contact.name}</span>
            </td>
            <td>
                <span className='align-middle'>{contact.lastname}</span>
            </td>
            <td>
                <span className='align-middle'>{contact.email}</span>
            </td>
            <td>
            {contactStatusIcon()}
            </td>
            <td>
               
                <i onClick={ () => remove(contact) } className='bi bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}}></i>
            </td>
        </tr>
    );
};


ContactComponentB.propTypes = {
    // connection: PropTypes.bool
    contact : PropTypes.instanceOf(Contact).isRequired,
    state : PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired

};


export default ContactComponentB;
