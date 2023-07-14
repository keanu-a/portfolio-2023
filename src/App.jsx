import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';

import TagalogLearning from './pages/projectPages/TagalogLearning';
import RoutineTracker from './pages/projectPages/RoutineTracker';
import Omnifood from './pages/projectPages/Omnifood';
import PigGame from './pages/projectPages/PigGame';
import Pomodoro from './pages/projectPages/Pomodoro';

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
            <Route path="/tagalog-learning" element={<TagalogLearning />} />
            <Route path="/routine-tracker" element={<RoutineTracker />} />
            <Route path="/omnifood" element={<Omnifood />} />
            <Route path="/pig-game" element={<PigGame />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
