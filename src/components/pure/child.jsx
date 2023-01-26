import React, {useRef} from 'react';

// useRef -> reference HTML elements-referenciar elementos
const Child = ({name, send, update}) => {

    // ossociate element so we can get the value anytime
    const messageRef = useRef('')
    const nameRef = useRef('')


    /**
     * @functions 
     */
    function pressButton(){
        // get input value
        const text = messageRef.current.value;
        alert(`Input text: ${text} `)
    }

    function pressButtonParants(text){
        alert(`Text: ${text} `)
    }


    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{background:'Cyan', padding:'30px' }}>
            <p onMouseOver={ () => console.log('On Mouse Over') }>child component</p>
            <p>Hola, {name}</p>
            <button onClick={ () => console.log('pressed button 1') }>
                Button 1
            </button>
            <button onClick={ pressButton }>
                Button 2
            </button>
            {/* Note: To execute function with parameters we must use a anonymous function*/}
            <button onClick={ () => pressButtonParants('Hello') }>
                Button 3
            </button>
            <input 
                placeholder='Insert a text to your father'
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input Changed: ', e.target.value)}
                onCopy={() => console.log('Copied text from imput')}
                ref={messageRef}
             />
            
            {/* function 'send' comes from father component 
             and it is call here with a parameter */}
             <button onClick={ () => send(messageRef.current.value) }>
                Send Message
             </button>

             {/* form */}
             <div style={{ marginTop: '20px' }}>
                <form onSubmit={ submitName }>
                    <input ref={ nameRef } placeholder='New Name' />
                    <button type='submit'>Update Name</button>
                </form>
             </div>
        </div>
    );
}

export default Child;
