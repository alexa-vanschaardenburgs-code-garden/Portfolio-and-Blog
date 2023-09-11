import '../App/App.scss';
import Nav from '../Nav/Nav.js';
import Home from '../Home/Home.js';
import Error from '../Error/Error.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
