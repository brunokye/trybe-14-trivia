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
    return (
      <div>
        <h1
          data-testid="feedback-text"
        >
          FeedBack
        </h1>
        <Header />
        <button
          type="button"
          onClick={ this.gotToRanking }
          data-testid="btn-ranking"
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

FeedBack.propTypes = {
  history: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(FeedBack);
