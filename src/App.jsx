import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Alphabets from './Alphabets';
import Quiz from './Quiz';
import FeedbackForm from './FeedbackForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabets" element={<Alphabets />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}
