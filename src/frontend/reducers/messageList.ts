import {
  AppActions
} from '../actions';

import MessageList from "../interfaces/message-list.interface";

export interface MessageListState {
  state: string, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
    message: MessageList,
    errorMessage?: string
}

function defaultMessageListState(): MessageListState {
  return {
    state: 'INIT',
    message: { messageList: [] }
  };
}

function messageListReducer(state: MessageListState, action: AppActions): MessageListState {
  switch (action.type) {
    case 'MESSAGES_FETCH':
      return {
        ...state,
        state: 'LOADING',
        message: { messageList: [] }
      }
    case 'MESSAGES_FETCH_SUCCESS':
      return {
        ...state,
        state: 'LOADED',
        message:  action.message
      }
    case 'MESSAGES_FETCH_ERROR':
      return {
        ...state,
        state: 'ERROR',
        message: { messageList: [] },
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }

}

export default {
  defaultMessageListState,
  messageListReducer,
}
