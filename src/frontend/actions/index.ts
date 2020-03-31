import { Action, Dispatch } from 'redux';
import ScoutRecommendationList from "../interfaces/scout-recommendation-list.interface";
import ScoutRecommendationApi from '../services/api/scout-recommendation.api';

export const ACTION_RECOMMENDATIONS_FETCH = 'RECOMMEDNATIONS_FETCH';
export const ACTION_RECOMMENDATIONS_FETCH_SUCCESS = 'RECOMMEDNATIONS_FETCH_SUCCESS';
export const ACTION_RECOMMENDATIONS_FETCH_ERROR = 'RECOMMEDNATIONS_FETCH_ERROR';

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type;
}

export interface IActionRecommendationsFetch extends Action {
  type: 'RECOMMEDNATIONS_FETCH'
}

export interface IActionRecommendationsFetchSuccess extends Action {
  type: 'RECOMMEDNATIONS_FETCH_SUCCESS',
  scoutRecommendations: ScoutRecommendationList
}

export interface IActionRecommendationsFetchError extends Action {
  type: 'RECOMMEDNATIONS_FETCH_ERROR',
  errorMessage: string
}

export type AppActions = IActionRecommendationsFetch | IActionRecommendationsFetchSuccess | IActionRecommendationsFetchError;

function dispatchFetchRecommendationsProgress(): IActionRecommendationsFetch {
  return {
    type: ACTION_RECOMMENDATIONS_FETCH
  }
}

function dispatchFetchRecommendationsSuccess(scoutRecommendations: ScoutRecommendationList): IActionRecommendationsFetchSuccess {
  return {
    type: ACTION_RECOMMENDATIONS_FETCH_SUCCESS,
    scoutRecommendations
  }
}

function dispatchFetchRecommendationsError(error: Error): IActionRecommendationsFetchError {
  return {
    type: ACTION_RECOMMENDATIONS_FETCH_ERROR,
    errorMessage: error.message
  }
}

export function actionFetchRecommendations(){
  return (dispatch: Dispatch) => {
    dispatch(dispatchFetchRecommendationsProgress());
    return ScoutRecommendationApi.getAll()
    .then((recommendations) => {
      return dispatch(dispatchFetchRecommendationsSuccess(recommendations));
    })
    .catch((error: Error) => {
      return dispatch(dispatchFetchRecommendationsError(error));
    });
  };
}