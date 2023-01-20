import React, {useEffect} from 'react'


const AllCycles = () =>{

    useEffect(() =>{
        console.log('Componente creado')
        const intervalID = setInterval(() =>{
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')

        }, 1000);

        return() =>{
            console.log('Componente va ha desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalID)
        }

    }, [])

    return(
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}

export default AllCycles