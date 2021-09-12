import { IMessage, MessageAction, MessageActionTypes, MessageState } from "../../interfaces/chat";

const defaultMessageState: MessageState = {
  messages: [],
  error: '',
};
export const messageReducer = (state = defaultMessageState, action: MessageAction):MessageState => {
  switch (action.type) {
    case MessageActionTypes.FETCH_MESSAGES:
      return { ...state};
    case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload };
    case MessageActionTypes.FETCH_MESSAGES_ERROR:
      return { ...state, error: action.payload };
    default: return state;
  }
};
