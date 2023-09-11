import '../App/App.scss';
import Home from '../Home/Home.js';
import Nav from '../Nav/Nav.js';
import About from '../About/About.js';
import Work from '../Work/Work.js';
import Error from '../Error/Error.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
