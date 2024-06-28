import Test from './Test';
import './App.css';  
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;  

