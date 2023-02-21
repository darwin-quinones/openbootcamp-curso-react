import React, {useEffect, useState}from 'react';
let initialSquareStiles = {
    width: '255px',
    height: '255px',
    backgroundColor: 'black'
   
}

const CuandradoComponent = () => {
    // colors
    let yellow = 223; let green = 206; let red = 27;
    let clickCount = 0
    const [SquareStyle, setSquareStyle] = useState(initialSquareStiles)
    //rgb(223 206 27)
    const changeColorOnMauseOver = () => {
        setSquareStyle(SquareStyle => ({...SquareStyle, backgroundColor: `rgb(${yellow}, ${green}, ${red})`}));
    }

    const changeColorOnMauseLeave = () => {
        setSquareStyle(initialSquareStiles);
    }

    function countClicks(){
        clickCount = clickCount + 1
        if(clickCount >=2) setSquareStyle(initialSquareStiles);
    }

    useEffect(() => {
    
    }, [SquareStyle]);

    return (
        <div className=''>
            
            <h4>Ejercicios sesion 10, 11, 12</h4> <br />
            <h5>Create by Darwin Quiñones</h5><br/>
            <div className='' onClick={countClicks} onMouseLeave={changeColorOnMauseLeave} onMouseOver={changeColorOnMauseOver} style={SquareStyle}></div>
        </div>
    );
}
export default CuandradoComponent;
