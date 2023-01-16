import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class FeedBack extends Component {
  render() {
    return (
      <div>
        <h1
          data-testid="feedback-text"
        >
          FeedBack
        </h1>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(FeedBack);
