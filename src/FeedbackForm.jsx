import React from 'react';
import './FeedbackForm.css';
import { Link } from 'react-router-dom';

// class Component

class FeedbackForm extends React.Component {
  
  // contructor and props
  constructor(props) {
    super(props);
    this.state = { // state to hold feedback data
      feedback: {},
      submitted: false // for conditional rendering
    };

    this.handleNameChange = this.handleNameChange.bind(this); // binding methods
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  // methods to handle form input changes
  // these methods update the state with user input

  handleNameChange(e) { 
    // setState to update feedback
    this.setState((state, props) => {
      let feedback = state.feedback;
      feedback.name = e.target.value;
      return { feedback: feedback };
    });
  }

  handleRoleChange(e) {
    this.setState((state, props) => {
      let feedback = state.feedback;
      feedback.role = e.target.value;
      return { feedback: feedback };
    });
  }

  handleRatingChange(e) {
    this.setState((state, props) => {
      let feedback = state.feedback;
      feedback.rating = e.target.value;
      return { feedback: feedback };
    });
  }

  handleCommentChange(e) {
    this.setState((state, props) => {
      let feedback = state.feedback;
      feedback.comment = e.target.value;
      return { feedback: feedback };
    });
  }

  onSubmit = (e) => { // handling form submission
    e.preventDefault();
    alert("Your feedback has been submitted! Thank you for your input.");
    this.setState({ feedback: { name: '', role: '', rating: '', comment: '' }, submitted: true });
  }

  render() {
    return (
      <div className="feedback-container">
        <div className="info-section">
          <div className="info-content">
            <h1 className="info-title">
              Your Voice Matters
            </h1>
            <p className="info-description">
              We're constantly working to improve our platform and create the best possible experience for parents and teachers alike. Your feedback helps us understand what's working well and what we can do better.
            </p>

            <div className="info-points">
              <p className="point-text">1. Share your honest thoughts about your experience</p>
              <p className="point-text">2. Help us understand your role and perspective</p>
              <p className="point-text">3. Rate your overall satisfaction with our service</p>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "Your feedback is invaluable in helping us create better educational tools and resources."
              </p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="feedback-card">
            {this.state.submitted ? (
              <p className="thank-you">Thank you for your feedback!</p> // conditional rendering for thank you message
            ) : (
            <div id="feedbackForm">
              <form onSubmit={(e) => this.onSubmit(e)}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.feedback.name}
                  onChange={this.handleNameChange}
                />

                <label htmlFor="role">You are a</label>
                <select
                  id="role"
                  name="role"
                  value={this.state.feedback.role}
                  onChange={this.handleRoleChange}
                >
                  <option value="">Select your role</option>
                  <option value="Parent">Parent</option>
                  <option value="Teacher">Teacher</option>
                </select>

                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  name="rating"
                  value={this.state.feedback.rating}
                  onChange={this.handleRatingChange}
                >
                  <option value="">Select rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <label htmlFor="comment">Comments</label>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Share your thoughts with us..."
                  value={this.state.feedback.comment}
                  onChange={this.handleCommentChange}
                  rows={3}
                />

                <input type="submit" value="Submit Feedback" />
              </form>
            </div>)}

            <div className="back-container"> {/* navigation with Link */}
              <Link to="/"><button
                className="back-button"
              >
                ← Back to Home
              </button></Link>
              <Link to="/quiz"><button
                className="back-button"
              >
                ← Back to Quiz
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;