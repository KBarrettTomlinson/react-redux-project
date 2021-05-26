import './App.css';
import Counter from './counter/Counter.jsx';
import CounterDisplay from './counterDisplay/CounterDisplay.jsx';

const counters = ["Dale", "Laura", "Bob", "Mike"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterDisplay></CounterDisplay>
        {counters.map((counter => {
          return(<Counter key = {counter} name = {counter}></Counter>);
        }))}
      </header>
    </div>
  );
}

export default App;
