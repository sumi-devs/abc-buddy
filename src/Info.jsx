import { Link } from "react-router-dom";
import './Info.css';

// function component

function Info() {

    return (
        <div className="home-container">
            <h1 className="hero-title">ABC Buddy</h1><br/>

            <div className="info-grid">
                <div className="info-card">
                    <h2>🛠️ Built With</h2>
                    <ul>
                        <li>
                            <strong>HTML</strong> - Structure and semantic layout for the application's pages.
                        </li>
                        <li>
                            <strong>CSS</strong> - Styling, layout, and responsive design to make the UI visually appealing.
                        </li>
                        <li>
                            <strong>ReactJS</strong> - Component-based JavaScript library for building a dynamic and interactive user experience.
                        </li>
                    </ul>
                </div>


                <div className="info-card">
                    <h2>🎯 Target Audience</h2>
                    <p>This application targets children at beginner learning levels who are developing their alphabet recognition. Many children with autism are visual learners who benefit from structured, repetitive learning experiences with immediate feedback.</p>
                </div>

                {/* This section provides video information on how to help children with autism learn the alphabet*/}
                <div className="info-card">
                    <h2>📺 Video Material</h2>
                    <a href="https://www.youtube.com/watch?v=2hFEWOBBl0w" target="_blank" rel="noreferrer">How To Teach Your Child With Autism Letter Awareness</a><br/><br/>
                    <a href="https://www.youtube.com/watch?v=c67F3RrVii0" target="_blank" rel="noreferrer">How to: Teach Identifies Letters using ABA </a><br/><br/>
                    <a href="https://www.youtube.com/watch?v=mCs6omm6MxY" target="_blank" rel="noreferrer">AUTISM | HOW I TEACH THE ALPHABET AND LETTER SOUNDS</a><br/><br/>
                    <a href="https://www.youtube.com/shorts/mDY5BTyeQMs" target="_blank" rel="noreferrer">The Right vs Wrong Way to Teach Letters </a><br/><br/>
                    <a href="https://www.youtube.com/watch?v=A6zRyrURI2E" target="_blank" rel="noreferrer">How to Teach the Alphabet to Preschoolers</a>
                </div>
            </div>

            {/*  Routing using Link */}

            <Link to="/"><button className="h-button">
               ← Back to Home
            </button></Link>

        </div>
    );
}

export default Info;