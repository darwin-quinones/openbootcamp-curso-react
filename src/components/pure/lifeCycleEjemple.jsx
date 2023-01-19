/**
 * Ejemplo de un componente de tipo clase que dispone
 *  de métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleEjemple extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Se ejecuta cuando se instancia el componente')
    }
    
    componentWillMount() {
        console.log('WillMount: Se ejecuta antes del montaje del componente')
        
    }
    
    componentDidMount() {
        console.log('DidMount: Se ejecuta justo al montaje del componente, antes de renderizarlo')
        
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('ReceiveProps: Se ejecuta si va a recibir nuevas props')
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debo o no actulizarse
         *  return true / false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Se ejecuta justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Se ejecuta justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Se ejecuta justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleEjemple.propTypes = {
    
};

export default LifeCycleEjemple;