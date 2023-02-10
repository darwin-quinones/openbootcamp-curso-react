import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponentB from '../pure/contactComponentB'




const ContactComponentA = () => {
    const contact1 = new Contact('Pepe', 'Perez', 'pepe@gmail.com', false)
    const contact2 = new Contact('Maria', 'Rodriguez', 'maria@gmail.com', true)
    const contact3 = new Contact('Bob', 'Ramos', 'bob@gmail.com', true)

    const [contacts, setContacts] = useState([contact1, contact2, contact3])
    // its execute when page loads
    useEffect(() =>{
        console.log('page loading')
       
    },[contacts])
    
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* card-header */}
                    <div className='card-header'>
                        <p>My contacts</p>
                    </div>
                    {/* card-content */}
                    <div className='card-body'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Lastname</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                        return(
                                            <ContactComponentB
                                                key={index}
                                                contact={contact}>
                                            </ContactComponentB>
                                         
                                        )
                                        
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='card-footer'>
                    </div>
                </div>
            </div>
        {/* <h3>Name: {contact.name}</h3>
        <h3>Lastname: {contact.lastname}</h3>
        <h3>Email: {contact.email}</h3>


        <ContactComponentB 
        connection={contact.connected}
        >
        </ContactComponentB> */}
    </div>
    );
};


ContactComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponentA;
