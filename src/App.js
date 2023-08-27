import './App.css';
import Logo from './img/react-logo.PNG';
import './stylesheets/task.css';
import Taskslist from './components/tasks';

function App() {

  const textInput = 'hola';
  return (
    <div className="App">
      <div className="app-tasklist">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="logo-img" />
        </div>
        <div className="app-tasks-list">
          <h1 className="head-task">Mis tareas</h1>
          <Taskslist text = {textInput} />  
        </div>
      </div>
    </div>
  );
}

export default App;
