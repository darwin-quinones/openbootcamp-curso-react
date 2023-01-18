import logo from './logo.svg';
import './App.css';
import ContactComponentA from './components/container/contactComponentA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <Ejemplo4 nombre={'Darwin'}>
          {/* Todo lo que hay aquí, es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
