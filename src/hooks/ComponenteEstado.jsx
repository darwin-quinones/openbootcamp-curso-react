import axios from "axios";
import React, {useEffect, useState} from "react";



const ComponenteEstado = () => {

    const [puntos, setPuntos] = useState(0);

    useEffect(() => {
        obtenerUsuario()
    }, [puntos]);

    const obtenerUsuario = () =>{
        return axios.get('https://randomuser.me/api').then((response) =>{
            if(response.status === 200){
                alert(JSON.stringify(response.data))
            }else{
                throw new Error('Error al obtener el usuario aleatorio')
            }
        }).catch((e) => console.error(e))
    }

    const sumarPuntos = () =>{
        setPuntos(puntos + 1)
    }

    return (
        <div>
            <h1>Hello Darwin</h1>
            <h2>Puntuación: {puntos}</h2>
            <button onClick={sumarPuntos}>Sumar puntos</button>
        </div>
    )
}


export default ComponenteEstado