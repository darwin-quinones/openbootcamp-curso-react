import React from 'react';
// import PropTypes from 'prop-types';
// import { Contact } from '../../models/contact.class';


const ContactComponentB = (connected) => {
    return (
        <div>
            <p>Connected? {connected === true ? 'Online' : 'Offline'}</p>
            
        </div>
    );
};


// ContactComponentB.propTypes = {
//     contact: PropTypes.instanceOf(Contact)
// };


export default ContactComponentB;
