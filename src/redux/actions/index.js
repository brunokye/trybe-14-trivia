import { SAVE_PLAYER_INFO, SCORE, ADD_ASSERTIONS } from './actionTypes';

export const savePlayerInfo = (playerInfo) => ({
  type: SAVE_PLAYER_INFO,
  payload: playerInfo,
});

export const sumScore = (score) => ({
  type: SCORE,
  payload: score,
});

export const addAssertions = (payload) => ({
  type: ADD_ASSERTIONS,
  payload,
});
