import {
  AppActions
} from '../actions';

import ScoutRecommendationList from "../interfaces/scout-recommendation-list.interface";

export interface ScoutRecommendationListState {
  state: string, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
  scoutRecommendations: ScoutRecommendationList,
  errorMessage?: string
}

export function defaultScoutRecommendationListState(): ScoutRecommendationListState {
  return {
    state: 'INIT',
    scoutRecommendations: { scoutRecommendationsList: [] }
  };
}

export function scoutRecommendationListReducer(state: ScoutRecommendationListState, action: AppActions): ScoutRecommendationListState {
  switch (action.type) {
    case 'RECOMMEDNATIONS_FETCH':
      return {
        ...state,
        state: 'LOADING',
        scoutRecommendations: { scoutRecommendationsList: [] }
      }
    case 'RECOMMEDNATIONS_FETCH_SUCCESS':
      return {
        ...state,
        state: 'LOADED',
        scoutRecommendations: action.scoutRecommendations
      }
    case 'RECOMMEDNATIONS_FETCH_ERROR':
      return {
        ...state,
        state: 'ERROR',
        scoutRecommendations: { scoutRecommendationsList: [] },
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }

}