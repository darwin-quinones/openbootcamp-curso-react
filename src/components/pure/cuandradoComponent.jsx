import React from 'react';



const triangleStyle = {
    width: '255px',
    height: '255px',
    backgroundColor: 'black'
    // borderLeft: '128px solid transparent',
    // borderRight: '128px solid transparent',
    // borderBottom: '255px solid black',
    //margin: '2rem'
}

function changeColorOnMauseOver() {
  triangleStyle.backgroundColor : 'red'
}


const CuandradoComponent = () => {
    return (
        <div>
            <div onMouseOver={changeColorOnMauseOver} style={triangleStyle}>

            </div> <br/>
            
        </div>
    );
}

export default CuandradoComponent;
