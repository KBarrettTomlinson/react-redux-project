import './App.css';
import Counter from './counter/Counter.jsx';
import CounterDisplay from './counterDisplay/CounterDisplay.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterDisplay></CounterDisplay>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
