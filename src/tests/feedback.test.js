import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Feedback from '../pages/Feedback';

describe('When render <Feedback/>', () => {
  it('Should contain a play again btn', () => {
    renderWithRouterAndRedux(<Feedback />);
    const playAgainBtn = screen.getByTestId('btn-play-again');
    expect(playAgainBtn).toBeInTheDocument();
  });

  it('Should contain a ranking btn', () => {
    renderWithRouterAndRedux(<Feedback />);
    const rankingBtn = screen.getByTestId('btn-ranking');
    expect(rankingBtn).toBeInTheDocument();
  });

  it('Should contain a avatar img', () => {
    renderWithRouterAndRedux(<Feedback />);
    const avatarImg = screen.getByTestId('header-profile-picture');
    expect(avatarImg).toBeInTheDocument();
  });

  it('Should contain a name field', () => {
    renderWithRouterAndRedux(<Feedback />);
    const name = screen.getByTestId('header-player-name');
    expect(name).toBeInTheDocument();
  });

  it('Should contain a score field', () => {
    renderWithRouterAndRedux(<Feedback />);
    const score = screen.getByTestId('header-score');
    expect(score).toBeInTheDocument();
  });

  it('Should contain a text field', () => {
    renderWithRouterAndRedux(<Feedback />);
    const feedbackTxt = screen.getByTestId('feedback-text');
    expect(feedbackTxt).toBeInTheDocument();
  });
});