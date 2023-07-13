import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Project from './pages/Project';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <div className="flex flex-col max-w-6xl m-auto">
        <header>
          <Navbar />
        </header>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/:projectName" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
