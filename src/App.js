import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import DataProvier from './Context/DataProvier';
function App() {
  return (
    <DataProvier>
     <Home/>
    </DataProvier>
  );
}

export default App;
