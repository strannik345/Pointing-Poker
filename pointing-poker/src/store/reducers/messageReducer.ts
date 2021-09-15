import { MessageAction, MessageActionTypes, MessageState } from "../../interfaces/chat";

const defaultMessageState: MessageState = {
  messages: [],
  error: '',
};
export const messageReducer = (state = defaultMessageState, action: MessageAction):MessageState => {
  console.log("reducer", state);
  switch (action.type) {
    // case MessageActionTypes.FETCH_MESSAGES:
    //   return { ...state};
    case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
      console.log("success");
      return { ...state, messages: state.messages.concat(action.payload) };
    case MessageActionTypes.FETCH_MESSAGES_ERROR:
      return { ...state, error: action.payload };
    case MessageActionTypes.POST_MESSAGE:
      console.log("post");
      return {...state, messages: state.messages.concat(action.payload) };
    default: return state;
  }
};
