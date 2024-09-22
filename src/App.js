import './App.css';
import TypeGuard from './components/TypeGuard';
import { TYPE_GUARD_DATA } from './mock';

function App() {
  return (
    <div className="App">
      <h3>TypeGuard Example</h3>
      <TypeGuard data={TYPE_GUARD_DATA} />
    </div>
  );
}

export default App;
