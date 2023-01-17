import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponentB from '../pure/contactComponentB'




const ContactComponentA = () => {
    const contact = new Contact('Pepe', 'Perez', 'pepe@gmail.com', false)
    return (
        <div>
        <h3>Name: {contact.name}</h3>
        <h3>Lastname: {contact.lastname}</h3>
        <h3>Email: {contact.email}</h3>
        <ContactComponentB connected={true}></ContactComponentB>
    </div>
    );
};


ContactComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponentA;
