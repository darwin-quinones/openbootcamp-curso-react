// CLASE COMPONENTES Y JERARQUIA

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    // props datos(caracteristicas de los elementos)
    // estado = informacion privada que se le pasa aun componente

    constructor(props) {
        super(props)
        this.state = {
            age: 21
        }
    }


    render() {
        return (
            <div>
             <h1>Hellooo {this.props.name}!</h1>
                <h2>Your age is: {this.state.age}</h2>

                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    // array function
    birthday = () =>{
        this.setState((prevState) =>(
            {
                age: prevState.age + 1
            }
        ))
    } 
}

// Los propTypes = contenido que se le puede pasar a un componente desde de otro componente de orden superior
Greeting.propTypes = {
    // definir el tipo de los propstypes  
    name: PropTypes.string

};


export default Greeting;
