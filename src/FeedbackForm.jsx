import React from 'react';
import './FeedbackForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


class FeedbackForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         feedback: {}
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleRoleChange = this.handleRoleChange.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
   }

   handleNameChange(e) {
      this.setState((state) => {
         let feedback = state.feedback;
         feedback.name = e.target.value;
         return { feedback };
      });
   }

   handleRoleChange(e) {
      this.setState((state) => {
         let feedback = state.feedback;
         feedback.role = e.target.value;
         return { feedback };
      });
   }

   handleRatingChange(e) {
      this.setState((state) => {
         let feedback = state.feedback;
         feedback.rating = e.target.value;
         return { feedback };
      });
   }

   handleCommentChange(e) {
      this.setState((state) => {
         let feedback = state.feedback;
         feedback.comment = e.target.value;
         return { feedback };
      });
   }

   onSubmit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(this.state.feedback));
   }

   render() {
      return (
         <div id="feedbackForm">
            <h2>Feedback</h2>
            <form onSubmit={(e) => this.onSubmit(e)}>
               <label htmlFor="name">Your Name</label>
               <input type="text" id="name" name="name" placeholder="Enter your name"
                  value={this.state.feedback.name || ''}
                  onChange={this.handleNameChange} />

               <label htmlFor="role">You are a</label>
               <select id="role" name="role"
                  value={this.state.feedback.role || ''}
                  onChange={this.handleRoleChange}>
                  <option value="">Select</option>
                  <option value="Parent">Parent</option>
                  <option value="Teacher">Teacher</option>
               </select>

               <label htmlFor="rating">Rating (1 to 5)</label>
               <input type="number" min="1" max="5" id="rating" name="rating"
                  value={this.state.feedback.rating || ''}
                  onChange={this.handleRatingChange} />

               <label htmlFor="comment">Comments</label>
               <textarea id="comment" name="comment" placeholder="Enter your feedback"
                  value={this.state.feedback.comment || ''}
                  onChange={this.handleCommentChange}></textarea>

               <input type="submit" value="Submit" />
            </form>

            <br />

            <button onClick={() => navigate('/.')} className="back-button">
               Back to Home
            </button>
         </div>
      )
   }
}

export default FeedbackForm;
