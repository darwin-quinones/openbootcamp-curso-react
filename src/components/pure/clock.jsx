import React, {Component} from 'react';

class Clock extends Component {

    constructor(props){
        super(props)
        //* Estado privado del documento

        this.state = {
            //* Se genera una fecha como estado inicial del componente
            fecha : new Date(),
            edad: 21,
            nombre: 'Darwin',
            apellidos: 'Quiñones Sanchez'
        }
    }

    //* ('DidMount: Se ejecuta justo al montaje del componente, antes de renderizarlo')
    componentDidMount(){
        console.log('DidMount: Se ejecuta justo al montaje del componente, antes de renderizarlo')
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    //* 'WillUnmount: Se ejecuta justo antes de desaparecer'
    componentWillUnmount(){
        console.log('WillUnmount: Se ejecuta justo antes de desaparecer')
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div>
                <h2>Hora actual: {this.state.fecha.toLocaleTimeString()}</h2>
                <h3>{this.state.nombre} {this.state.apellidos}</h3>
                <h1>Edad: {this.state.edad}</h1>
            </div>
        )
    }

    tick(){
        this.setState((prevState) =>{
            let edad = prevState.edad + 1
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        })
    }
}

export default Clock