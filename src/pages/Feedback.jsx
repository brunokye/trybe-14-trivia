import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const { assertions } = this.props;
    const numberThree = 3;
    return (
      <div>
        <Header />
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

export default connect(mapStateToProps)(Feedback);
