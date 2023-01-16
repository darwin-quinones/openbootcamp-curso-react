import logo from './logo.svg';
import './App.css';
import ContactComponentA from './components/container/contactComponentA';
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
        <ContactComponentA></ContactComponentA>
      </header>
    </div>
  );
}

export default App;
