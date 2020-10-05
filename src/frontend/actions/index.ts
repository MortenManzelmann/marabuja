import { Action, Dispatch } from 'redux';
import MessageList from "../interfaces/message-list.interface";
import MessageApi from '../services/api/message.api';
import { Message } from  '../interfaces/message.interface'

export const ACTION_MESSAGE_FETCH = 'MESSAGE_FETCH';
export const ACTION_MESSAGE_FETCH_SUCCESS = 'MESSAGE_FETCH_SUCCESS';
export const ACTION_MESSAGE_FETCH_ERROR = 'MESSAGE_FETCH_ERROR';
export const ACTION_POST_MESSAGE = 'POST_MESSAGE';

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type;
}

export interface IActionMessageFetch extends Action {
  type: 'MESSAGE_FETCH'
}

export interface IActionMessageFetchSuccess extends Action {
  type: 'MESSAGE_FETCH_SUCCESS',
  scoutMessage: MessageList
}

export interface IActionMessageFetchError extends Action {
  type: 'MESSAGE_FETCH_ERROR',
  errorMessage: string
}

export interface IActionPost extends Action {
  type: 'POST_MESSAGE',
  message: Message
}

export type AppActions = IActionMessageFetch | IActionMessageFetchSuccess | IActionMessageFetchError;

function dispatchFetchMessageProgress(): IActionMessageFetch {
  return {
    type: ACTION_MESSAGE_FETCH
  }
}

function dispatchFetchMessageSuccess(scoutMessage: MessageList): IActionMessageFetchSuccess {
  return {
    type: ACTION_MESSAGE_FETCH_SUCCESS,
    scoutMessage
  }
}

function dispatchFetchMessageError(error: Error): IActionMessageFetchError {
  return {
    type: ACTION_MESSAGE_FETCH_ERROR,
    errorMessage: error.message
  }
}

function dispatchPostMessage(message: Message): IActionPost{
  return {
type: ACTION_POST_MESSAGE,
message
  }
}

export function actionFetchMessage(){
  return (dispatch: Dispatch) => {
    // dispatch(dispatchFetchMessageProgress());
    return MessageApi.getAll()
    .then((recommendations) => {
      return dispatch(dispatchFetchMessageSuccess(recommendations));
    })
    .catch((error: Error) => {
      return dispatch(dispatchFetchMessageError(error));
    });
  };
}

export function actionPostMessage(message: Message){
  return (dispatch: Dispatch) => {
    MessageApi.post(message);
    return MessageApi.getAll()
    .then((recommendations) => {
      return dispatch(dispatchFetchMessageSuccess(recommendations));
    })
    .catch((error: Error) => {
      return dispatch(dispatchFetchMessageError(error));
    });
  }
}
