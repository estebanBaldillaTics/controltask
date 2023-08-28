import './App.css';
import Logo from './img/react-logo.PNG';
import './stylesheets/task.css';
import Listask from './components/ListTask';


function App() {
  return (
    <div className="App">
      <div className="app-tasklist">
        <div className="logo-container">
          <img className="logo-img" src={Logo} alt="logo-img" />
        </div>
        <div className="app-tasks-list">
          <h1 className="head-task">Mis tareas</h1>
            <Listask/>
        </div>
      </div>
    </div>
  );
}

export default App;
