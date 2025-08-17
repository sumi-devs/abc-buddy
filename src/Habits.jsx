import { Link } from "react-router-dom";
import './Habits.css';
import habits from './habits_data';

function Habits() {
    return (
        <div className="habits-container">
            <h1 className="habits-title">Good Social Etiquette Habits</h1>

            <div className="habits-grid">
                {habits.map((habit) => (
                    <div className="habit-card">
                        <video src={habit.video} poster={habit.poster} className="habit-video" controls width="200" height="150" />
                        <h2 className="habit-title">{habit.title}</h2>
                        <p className="habit-desc">{habit.desc}</p>
                    </div>
                ))}
            </div>


            <Link to="/"><button className="nav-button">← Back to Home</button></Link>
            <Link to="/alphabets"><button className="nav-button">Learn Alphabets →</button></Link>

        </div>
    );
}

export default Habits;