import { useState } from 'react';
import letters from './data';
import './Quiz.css';
import { Link } from 'react-router-dom';

// Function to get a random quiz question
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

// function component

function Quiz() {

    function playSound (file) {

        // audio play
        const audio = new Audio(`/assets/sounds/${file}.mp3`);
        audio.playbackRate = 0.75;
        audio.play();
    };

    const [quiz, setQuiz] = useState(getRandomQuiz());
    const [feedback, setFeedback] = useState('');

    function checkAnswer (choice)  { // checking answer function
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
                    <button key={opt.letter} className="option-button" onClick={() => checkAnswer(opt.letter)}> {/* onClick Event */}
                        {opt.letter}
                    </button>
                ))}
            </div>

            <div className="quiz-feedback">{feedback}</div>

            <Link to="/alphabets"><button className="back-b">
                Back to the Letters!
            </button></Link>
          
            <Link to="/feedback"><button className="feedback-button">
                Give Feedback
            </button></Link>
        </div>
    );
}

export default Quiz;