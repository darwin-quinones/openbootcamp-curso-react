import React, {useRef} from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class.js";


const ContactForm = ({add}) =>{

    const nameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact)
    }

    return(
        <form onSubmit={addContact} className='d-flex justify-content-center align-item-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef}  id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name' />
                <input ref={lastnameRef} id='inputLastname' type='text' className='from-control form-control-lg' required placeholder='Lastname' />
                <input ref={emailRef} id='inputEmail' type='text' className='from-control form-control-lg' required placeholder='Email' />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
        
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,

}

export default ContactForm