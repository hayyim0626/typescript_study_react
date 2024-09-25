import './App.css';
import Pick from './components/Pick';
import TypeGuard from './components/TypeGuard';
import { EXAMPLE_DATA } from './mock';

function App() {
  return (
    <div className="App">
      <h3>TypeGuard Example</h3>
      <TypeGuard data={EXAMPLE_DATA} />
      <h3>Pick Example</h3>
      <Pick data={EXAMPLE_DATA} />
    </div>
  );
}

export default App;
