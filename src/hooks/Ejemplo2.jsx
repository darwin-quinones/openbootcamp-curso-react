/**
 * Ejemplo de uso de:
 *  - useState() : poner estado o asignar valor a las variables- reenderizar un elemento
 *  - useRef() : identificar valores  o referenciar elementos dentro de la vista
 *  - useEffect() : controlar los cambios en la vista
 */
import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    /**
     * Vamos a crear dos contadores distintos
     * cada uno en un estado diferente
    */

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamos a crear un referencia con useRef() para asociar un
     * elemento del DOM del componente (vista HTML)
     */
    const myRef = useRef()

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     *Trabajando con useEffect
     */

     /**
      * ? Caso 1: ejecutar siempre un  snipper de código
      * cada vez que haya un cambio en el estado del componente
      * se ejecuta aquello que esté dentro del useEffect
      */

    //  useEffect(() =>{
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(myRef)
    //  })

    /***
     * ? caso 2: ejecutar solo cuando  cambie contador 1
     * cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect()
     * En caso de cambie contador 2, no habrá cambio
     */

    // useEffect(() =>{
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(myRef)
    // }, [contador1])


    
    /***
     * ? caso 3: ejecutar solo cuando  cambie contador1 / contador2
     * cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect()
     * cada vez que haya un cambio en el contador2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() =>{
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1')
        console.log('Mostrando referencia a elemento del DOM')
        console.log(myRef)
    }, [contador1,  contador2])

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento refenciado */}
            <h4 ref={myRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* Botones para cambiar los contadores */}

            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
            
        </div>
    );
}

export default Ejemplo2;
