import './App.css';
import Navi from "./layouts/Navi"
import Dashboard from "./layouts/Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navi/>
      <div className="dashboard">
      <Dashboard/>
      </div>
    </div>
  );
}

export default App;
