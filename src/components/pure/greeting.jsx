import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    // props datos(caracteristicas de los elementos)
    // estado = informacion privada que se le pasa aun componente
    render() {
        return (
            <div>
             <h1>Hellooo</h1>
                
            </div>
        );
    }
}

// Los propTypes = contenido que se le puede pasar a un componente des de otro componente de orden superior
Greeting.propTypes = {

};


export default Greeting;
