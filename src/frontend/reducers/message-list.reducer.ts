import {
  AppActions
} from '../actions';

import {MessageList} from "../interfaces/message-list.interface";

export interface ScoutRecommendationListState {
  state: string, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
  scoutRecommendations: MessageList,
  errorMessage?: string
}

export function defaultScoutRecommendationListState(): ScoutRecommendationListState {
  return {
    state: 'INIT',
    messageList: { messageList: [] }
  };
}

export function scoutRecommendationListReducer(state: ScoutRecommendationListState, action: AppActions): ScoutRecommendationListState {
  switch (action.type) {
    case 'RECOMMEDNATIONS_FETCH':
      return {
        ...state,
        state: 'LOADING',
        messageList: { messageList: [] }
      }
    case 'RECOMMEDNATIONS_FETCH_SUCCESS':
      return {
        ...state,
        state: 'LOADED',
        scoutRecommendations:  action.scoutRecommendations
      }
    case 'RECOMMEDNATIONS_FETCH_ERROR':
      return {
        ...state,
        state: 'ERROR',
        messageList: { messageList: [] },
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }

}
