import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  handleRankingBtn = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleRankingBtn }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default Feedback;
