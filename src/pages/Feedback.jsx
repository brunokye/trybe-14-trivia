import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  gotToRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  redirectResetPlay = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { assertions, score } = this.props;
    const numberThree = 3;
    return (
      <div>
        <Header />
        <span data-testid="feedback-text">
          { assertions >= numberThree ? <p>Well Done!</p> : <p>Could be better...</p> }
        </span>
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
        <button
          type="button"
          onClick={ this.gotToRanking }
          data-testid="btn-ranking"
        >
          Ranking
        </button>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.redirectResetPlay }
        >
          Play Again
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
