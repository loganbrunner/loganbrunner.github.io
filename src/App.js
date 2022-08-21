import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Research from './Research';
import Activity from './Activity';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Research" element={<Research />} />
        <Route path="Activity" element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
