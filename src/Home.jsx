import { useNavigate } from 'react-router-dom';
import letters from './data';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    const playSound = (file) => {
        const audio = new Audio(`/assets/sounds/${file}`);
        audio.playbackRate = 0.75;
        audio.play();
    };

    return (
        <div className="home-container">
            <div className="letter-grid">
                {letters.map((l) => (
                    <button key={l.letter} className="letter-button" onClick={() => playSound(l.sound)}>
                        <div className="letter-label">{l.letter}</div>
                        <img src={`/assets/images/${l.image}`} alt={l.word} className="letter-image" />
                    </button>
                ))}
            </div>

            <button onClick={() => navigate('/quiz')} className="quiz-button">
                Quiz Yourself !
            </button>
        </div>
    );
}
