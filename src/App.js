import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactComponentA from './components/container/contactComponentA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import ComponenteEstado from './hooks/ComponenteEstado';
import LifeCycleEjemple from './components/pure/lifeCycleEjemple';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';
import ClockHook from './hooks/clockHook';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import CuandradoComponent from './components/pure/cuandradoComponent';
import LoginFormik from './components/pure/forms/loginFormik.jsx';
import LoginShortFormik from './components/pure/forms/loginShortFormik.jsx';
import RegisterFormik from './components/pure/forms/registerFormik.jsx';
import TaskFormik from './components/pure/forms/taskFormik.jsx';
import AsyncExample from './components/pure/AsyncExample.jsx';
import ObservableExample from './components/pure/ObservableExample.jsx';
import FetchExample from './components/pure/FetchExample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* componente greeting */}
        {/* <Greeting name='Darwin'></Greeting> */}

        {/* COMPONENTE FUNCIONAL */}
        {/* <GreetingF name='Darwinn'></GreetingF> */}

        {/* COMPONENTE DE LISTADO DE TRAREAS */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* COMPONENTE A DEL EJERCICIO DADO */}
        {/* <ContactComponentA></ContactComponentA> */}

        {/* ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* declaracon de valores-  */}
        {/* <Ejemplo4 nombre={'Darwin'}> */}
          {/* Todo lo que hay aquí, es tratado como props.children */}
          {/* <h3>Contenido del props.children</h3>
        </Ejemplo4> */}

        {/* Ejemplo de componente que trae reenderiza un usuario aleatorio */}
        {/* <ComponenteEstado></ComponenteEstado> */}
        {/* <LifeCycleEjemple></LifeCycleEjemple> */}
        

        {/* Estylos  */}

        {/* <GreetingStyled name={'Darwin'}></GreetingStyled> */}

        {/* clock */}
        {/* <Clock></Clock> */}

        {/* Componente clock funcional */}
        {/* <ClockHook componente={'ClockHook'}></ClockHook> */}

      {/* </header> */}

        {/* Gestion de eventos */}
        {/* <Father></Father> */}

        {/* Ejemplo de rederizado condicional */}
        {/* <OptionalRender></OptionalRender> */}

        {/* CREANDO COMPONENTE CUADRADO DEL EJERCICIO
        <CuandradoComponent></CuandradoComponent> */}

        {/* Ejemplos de eso de formoik */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <LoginShortFormik></LoginShortFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}

        {/* Ejercicios sessiones 13, 14 y 15 */}
        {/* <TaskFormik></TaskFormik> */}

        {/* Ejemplos de procesos asincronos */}
        {/* <AsyncExample/> */}
        {/* <ObservableExample/> */}
        <FetchExample/>

        {/* COMPONENTE DE LISTADO DE TRAREAS PROYECTO FINAL */}
        {/* <TaskListComponent></TaskListComponent>  */}
    </div>
  );
}

export default App;
