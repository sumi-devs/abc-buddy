import './Habits.css';

// Nested component that is used in Habits.jsx

function HabitNested({ video, poster, title, desc }) {
    return (
        <div className="habit-card">
            <video src={video} poster={poster} className="habit-video" controls width="200" height="150" />
            <h2 className="habit-title">{title}</h2>
            <p className="habit-desc">{desc}</p>
        </div>
    );
}

export default HabitNested;