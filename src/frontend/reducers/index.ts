import {scoutRecommendationListReducer, defaultScoutRecommendationListState, ScoutRecommendationListState} from './scoutRecommendationsList';
import { Action } from 'redux';

export interface AppState {
    list: ScoutRecommendationListState
}

export function defaultState() {
  return {
    list: defaultScoutRecommendationListState()
  };
}

export function mainReducer(state: AppState = defaultState(), action: Action) {
  return {
    list: scoutRecommendationListReducer(state.list, action)
  };
}