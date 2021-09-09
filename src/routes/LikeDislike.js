import React, { Component } from "react";

export default class LikeDislike extends Component {
  state = {
    liked: false,
    disliked: false,
    likes: 100,
    dislikes: 25,
  };

  handleLikeClick = () => {
    this.setState({ liked: !this.state.liked, disliked: false });
    if (!this.state.liked) {
      this.setState({ likes: this.state.likes + 1 });
    }
    if (this.state.liked) {
      this.setState({ likes: this.state.likes - 1 });
    }
    if (this.state.disliked) {
      this.setState({ likes: this.state.dislikes - 1 });
    }
  };

  handleDisikeClick = () => {
    this.setState({ liked: false, disliked: !this.state.disliked });
    if (!this.state.liked) {
      this.setState({ likes: this.state.dislikes + 1 });
    }
    if (this.state.liked) {
      this.setState({ likes: this.state.dislikes - 1 });
    }
    if (this.state.disliked) {
      this.setState({ likes: this.state.likes - 1 });
    }
  };
  render() {
    return (
      <>
        <div>
          <h2>Like/Dislike</h2>
        </div>
        <div className="like-dislike">
          <button
            onClick={() => this.handleLikeClick()}
            className={`like-button ${this.state.liked ? "liked" : null}`}
          >
            Like | <span>{this.state.likes}</span>
          </button>
          <button
            onClick={() => this.handleDisikeClick()}
            className={`dislike-button ${
              this.state.disliked ? "disliked" : null
            }`}
          >
            Like | <span>{this.state.dislikes}</span>
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .dislike-button{
                        margin-left: 12px;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                    .like-dislike{
                        display: flex;
                    }
                `}</style>
      </>
    );
  }
}
