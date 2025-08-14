import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';
import Alphabets from './Alphabets';
import Quiz from './Quiz';
import FeedbackForm from './FeedbackForm';
import letters from './data';

// playSound function to pass to Alphabets
function playSound(file) {
  const audio = new Audio(`/assets/sounds/${file}`);
  audio.playbackRate = 0.75;
  audio.play();
}

// routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/alphabets" element={<Alphabets letters={letters} onLetterClick={playSound} />} /> {/* passing letters and playSound as props */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}
