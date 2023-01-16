import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class FeedBack extends Component {
  gotToRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { assertions } = this.props;
    const numberThree = 3;
    return (
      <div>
        <Header />
        <button
          type="button"
          onClick={ this.gotToRanking }
          data-testid="btn-ranking"
        >
          Ranking
        </button>
        <span data-testid="feedback-text">
          { assertions >= numberThree ? <p>Well Done!</p> : <p>Could be better...</p> }
        </span>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

FeedBack.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(FeedBack);
