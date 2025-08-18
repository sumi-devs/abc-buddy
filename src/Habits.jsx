import { Link } from "react-router-dom";
import './Habits.css';
import habits from './habits_data';
import HabitNested from './HabitNested';

function Habits() {
    return (
        <div className="habits-container">
            <h1 className="habits-title">Good Social Etiquette Habits</h1>

            <div className="habits-grid">

                {/* Nested Component */}
                {habits.map((habit) => (
                    <HabitNested video={habit.video} poster={habit.poster} title={habit.title} desc={habit.desc}/>
                ))}
            </div>

            <Link to="/"><button className="nav-button">← Back to Home</button></Link>
            <Link to="/alphabets"><button className="nav-button">Learn Alphabets →</button></Link>
        </div>
    );
}

export default Habits;
