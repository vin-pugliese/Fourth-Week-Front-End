import logo from './logo.svg';
import './App.css';
import { P, Div, Link } from './Link';
import { Counter } from './Counter';
import { A } from './Components/TreeComponents';

export default  function App() {
  
  const obj={
    name: 'Vincenzo',
    lastName: 'pugliese'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link obj={obj} />
        <Counter/>
        <Div />
        <A/>
        <P />
     
        
      </header>
    </div>
  );
}


