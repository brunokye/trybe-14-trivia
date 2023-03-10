import { SAVE_PLAYER_INFO, SCORE, RESET_SCORE, ADD_ASSERTIONS } from './actionTypes';

export const savePlayerInfo = (playerInfo) => ({
  type: SAVE_PLAYER_INFO,
  payload: playerInfo,
});

export const sumScore = (score) => ({
  type: SCORE,
  payload: score,
});

export const resetScore = () => ({
  type: RESET_SCORE,
});

export const addAssertions = (payload) => ({
  type: ADD_ASSERTIONS,
  payload,
});
