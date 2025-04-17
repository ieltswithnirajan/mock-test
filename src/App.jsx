import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import LearningResources from './pages/LearningResources';

// Learning Resources
import Grammar from './pages/Grammar';
import Strategies from './pages/Strategies';
import SpeakingCards from './pages/SpeakingCards';
import LatestTopics from './pages/LatestTopics';
import WritingSamples from './pages/WritingSamples';

// Mock Tests
import MockTests from './pages/MockTests';
import Reading from './pages/MockTests/Reading';
import Writing from './pages/MockTests/Writing';
import Listening from './pages/MockTests/Listening';
import Speaking from './pages/MockTests/Speaking';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow pt-8 md:pt-12"
        >
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning-resources" element={<LearningResources />} />

            {/* Learning Resources */}
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/speaking-cards" element={<SpeakingCards />} />
            <Route path="/latest-topics" element={<LatestTopics />} />
            <Route path="/writing-samples" element={<WritingSamples />} />

            {/* Mock Tests */}
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/mock-tests/:testId/listening" element={<Listening />} />
            <Route path="/mock-tests/:testId/reading" element={<Reading />} />
            <Route path="/mock-tests/:testId/writing" element={<Writing />} />
            <Route path="/mock-tests/:testId/speaking" element={<Speaking />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 