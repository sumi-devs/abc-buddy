import React from 'react';
import PropTypes from 'prop-types';
import './Alphabets.css';
import { Link } from 'react-router-dom';

// class component
// This component displays the alphabet letters with images and plays sounds on click or key press

class Alphabets extends React.Component {
    constructor(props) { // constructor to initialize state and bind methods
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) { // handling keydown events to play sound for the corresponding letter
        if (event.key.match(/[A-Za-z]/)) {
            const letterIndex = this.props.letters.findIndex(l => l.letter.toLowerCase() === event.key.toLowerCase());
            if (letterIndex !== -1) {
                this.props.onLetterClick(this.props.letters[letterIndex].sound);
            }
        }
    }

    render() {
        const { letters, onLetterClick } = this.props;

        return (
            <div className="alphabets-container" onKeyDown={this.handleKeyDown}>
                <div className="letter-grid">
                    {letters.map(l => (
                        <button key={l.letter}
                            className="letter-button" onClick={() => onLetterClick(l.sound)}>
                            <div className="letter-label">{l.letter}</div>
                            <img src={`/assets/images/${l.image}`} alt={l.word} className="letter-image" />
                        </button>
                    ))}
                </div>

                <div className="keyboard-instructions">
                    Press any letter key (A-Z) to hear its sound!
                </div>

                <Link to="/">
                    <button className="home-button">← Home</button>
                </Link>

                <Link to="/quiz">
                    <button className="quiz-button">Quiz Yourself!</button>
                </Link>
            </div>
        );
    }
}

Alphabets.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.shape({
    letter: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
    })).isRequired,
    onLetterClick: PropTypes.func.isRequired
};

export default Alphabets;
