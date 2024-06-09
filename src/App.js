import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just run <code>docker build -t mtrpz-lab-3 .</code> 
        </p>
        <b>Some bold text....</b>
      </header>
    </div>
  );
}

export default App;
