import { screen } from '@testing-library/react';
import React from 'react';
import Feedback from '../pages/Feedback';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';

describe('When render <Feedback/>', () => {
  it('Should contain a play again btn whose return to the home', () => {
    const { history } = renderWithRouterAndRedux(<Feedback />);
    
    expect(screen.getByTestId('btn-play-again')).toBeInTheDocument();
  
  
    userEvent.click(screen.getByTestId('btn-play-again'));
    
    const { pathname } = history.location;
  
    expect(pathname).toBe('/');
  });

it('Should contain a ranking btn whose redirect to ranking page', async () => {
  const { history } = renderWithRouterAndRedux(<Feedback />);

  expect(screen.getByRole('button', { name: /ranking/i })).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: /ranking/i }));

  const { pathname } = history.location;
  
  expect(pathname).toBe('/ranking');
  
});

  it('Should contain a correct question counter', () => {
    renderWithRouterAndRedux(<Feedback />);
    
    const questions = screen.getByTestId('feedback-total-question');
    
    expect(questions).toBeInTheDocument();
  });

  it('Should contain a text field', () => {
    
    renderWithRouterAndRedux(<Feedback />);
    
    const feedbackTxt = screen.getByTestId('feedback-text');
    
    expect(feedbackTxt).toBeInTheDocument();
  });

  it('Should contain a avatar img', () => {
    
    renderWithRouterAndRedux(<Feedback />);
    
    const avatarImg = screen.getByTestId('header-profile-picture');
    
    expect(avatarImg).toBeInTheDocument();
  });

  it('Should contain a score field', () => {
    
    renderWithRouterAndRedux(<Feedback />);
    
    const score = screen.getByTestId('header-score');
    
    expect(score).toBeInTheDocument();
  });

  it('Should contain a name field', () => {
    
    renderWithRouterAndRedux(<Feedback />);
    
    const name = screen.getByTestId('header-player-name');
    
    expect(name).toBeInTheDocument();
  });
});