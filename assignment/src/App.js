import './App.css';
import CharactersList from './pages/CharactersList';
import 'primereact/resources/themes/lara-light-blue/theme.css'
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";                                         

function App() {
  return (
    <div className="App">
      <CharactersList/>
    </div>
  );
}

export default App;
