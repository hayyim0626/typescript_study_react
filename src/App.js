import './App.css';
import Pick from './components/Pick';
import TypeGuard from './components/TypeGuard';
import { EXAMPLE_DATA } from './mock';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/type-guard"
            element={<TypeGuard data={EXAMPLE_DATA} />}
          />
          <Route path="/pick" element={<Pick data={EXAMPLE_DATA} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
