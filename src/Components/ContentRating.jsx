import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRating: 0
    };
  }

  handlelike = () => {
    this.setState(
      (prevState) => ({ likes: prevState.likes + 1 }),
      this.TotalRating
    );
  };

  handledislike = () => {
    this.setState(
      (prevState) => ({ dislikes: prevState.dislikes + 1 }),
      this.TotalRating 
    );
  };

  TotalRating = () => {
    this.setState((prevState) => ({
      totalRating: prevState.likes + prevState.dislikes
    }));
  };

  render() {
    return (
      <div className='content-rating'>
        <p>
          "Learning is not for free; you need to pay attention"
        </p>
        <div className='rating-buttons'>
          <button className="like-button" onClick={this.handlelike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.handledislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Rating: {this.state.totalRating}</p>
        </div>
      </div>
    );
  }
}

export default ContentRating;
