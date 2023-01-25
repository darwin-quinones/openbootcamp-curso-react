import React from 'react';

const Child = ({name}) => {

    /**
     * @functions 
     */
    function pressButton(){
        alert('Default Text')
    }

    function pressButtonParants(text){
        alert(`Text: ${text} `)
    }

    return (
        <div>
            <p onMouseOver={ () => console.log('On Mouse Over') }>child component</p>
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
                placeholder='Insert a text'
                onFocus={() => console.log('Input Focused')}
             />
        </div>
    );
}

export default Child;
