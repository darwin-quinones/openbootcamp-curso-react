import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponentB from '../pure/contactComponentB'
import ContactForm from '../pure/forms/contactForm';
// import contactForm from '../pure/forms/contactForm'




const ContactComponentA = () => {
    const contact1 = new Contact('Pepe', 'Perez', 'pepe@gmail.com', false)
    const contact2 = new Contact('Maria', 'Rodriguez', 'maria@gmail.com', true)
    const contact3 = new Contact('Bob', 'Ramos', 'bob@gmail.com', true)

    const [contacts, setContacts] = useState([contact1, contact2, contact3])
    // its execute when page loads
    useEffect(() =>{
        console.log('page loading')
       
    },[contacts])


    function changeConnectionState(contact){
        console.log('Changing state')
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]  // making a copy of contacts
        tempContact[index].connected = !tempContact[index].connected
        setContacts(tempContact)
    }

    function deleteContact(contact){
        console.log('Deleting contact')
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts] // making a copy of contacts
        tempContact.splice(index, 1) // delete the contact accrding to the index
        setContacts(tempContact)
    }

    function addContact(contact){
        console.log('Adding contact: '+ contact)
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }
    
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* card-header */}
                    <div className='card-header'>
                        <p>My contacts</p>
                    </div>
                    {/* card-content */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'} }>
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
                                                contact={contact}
                                                state={changeConnectionState}
                                                remove={deleteContact}
                                                >
                                            </ContactComponentB>
                                           
                                         
                                        )
                                        
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='card-footer'>
                        
                      
                    </div>
                </div><br/>
                <ContactForm add={addContact}></ContactForm>
            </div>
          
    </div>
    );
};


export default ContactComponentA;
