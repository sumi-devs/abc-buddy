import { useState } from 'react';
import letters from './data';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

function getRandomQuiz() {
    const correct = letters[Math.floor(Math.random() * letters.length)];
    const options = [correct];
    while (options.length < 3) {
        const random = letters[Math.floor(Math.random() * letters.length)];
        if (!options.includes(random)) options.push(random);
    }
    return {
        correct,
        options: options.sort(() => Math.random() - 0.5),
    };
}

export default function Quiz() {
    const playSound = (file) => {
        const audio = new Audio(`/assets/sounds/${file}.mp3`);
        audio.playbackRate = 0.75;
        audio.play();
    };

    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(getRandomQuiz());
    const [feedback, setFeedback] = useState('');

    const checkAnswer = (choice) => {
        if (choice === quiz.correct.letter) {
            setFeedback('✅ Correct!');
            playSound(choice)
            setTimeout(() => {
                setFeedback('');
                setQuiz(getRandomQuiz());
            }, 2000);
        } else {
            setFeedback('❌ Try again');
        }
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">What letter does this start with?</h2>
            <img src={`/assets/images/${quiz.correct.image}`} alt="quiz" className="quiz-image" />
            <div className="quiz-options">
                {quiz.options.map((opt) => (
                    <button key={opt.letter} className="option-button" onClick={() => checkAnswer(opt.letter)}>
                        {opt.letter}
                    </button>
                ))}
            </div>
            <div className="quiz-feedback">{feedback}</div>
            <button onClick={() => navigate('/.')} className="back-button">
                Back to the Letters
            </button>
            
            <button onClick={() => navigate('/feedback')} className="feedback-button">
                Give Feedback
            </button>
        </div>
    );
}