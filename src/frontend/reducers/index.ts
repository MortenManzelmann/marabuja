import {scoutRecommendationListReducer, defaultScoutRecommendationListState, ScoutRecommendationListState} from './message-list.reducer';
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
