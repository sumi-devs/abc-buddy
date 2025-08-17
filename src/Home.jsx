import { Link } from "react-router-dom";
import './Home.css';

// function component

function Home() {

    return (
        <div className="home-container">
            <h1 className="hero-title">ABC Buddy</h1>
            <p className="tagline">ABC Buddy is a website to help children with autism learn the alphabet. The website helps the children learn by associating the letters with images/words, as well as by playing a sound when the letter is pressed. Once the child is finished learning, they can quiz themselves to test their knowledge.</p>

            <div className="info-grid">

                <div className="info-card">
                    <h2>🎯 Goal</h2>
                    <p>Make learning alphabets fun and engaging for kids with autism.</p>
                </div>

                <div className="info-card">
                    <h2>💡 Features</h2>
                    <ul>
                        <li>Visual + audio interaction</li>
                        <li>Click-to-hear letter sounds</li>
                        <li>Simple quiz to reinforce learning</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h2>📌 Why It Helps</h2>
                    <ul>
                        <li>Visuals improve attention</li>
                        <li>Sounds support memory</li>
                        <li>Fun elements boost engagement</li>
                    </ul>
                </div>
            </div>

            {/*  Routing using Link */}

            <Link to="/alphabets"><button className="alphabets-button">
                Let's Learn Alphabets →
            </button></Link> 

            <Link to="/habits"><button className="habits-button">
                Let's Learn Social Etiquette →
            </button></Link>

            <Link to="/info"><button className="info-button">
                More Information →
            </button></Link>

        </div>
    );
}

export default Home;