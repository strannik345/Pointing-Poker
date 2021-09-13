import { MessageAction, MessageActionTypes, MessageState } from "../../interfaces/chat";

const defaultMessageState: MessageState = {
  messages: [],
  error: '',
};
export const messageReducer = (state = defaultMessageState, action: MessageAction):MessageState => {
  console.log("reducer", state);
  switch (action.type) {
    case MessageActionTypes.FETCH_MESSAGES:
      console.log("fetch");
      return { ...state};
    case MessageActionTypes.FETCH_MESSAGES_SUCCESS:
      console.log("fetch success");
      return { ...state, messages: action.payload };
    case MessageActionTypes.FETCH_MESSAGES_ERROR:
      console.log("fetch error")
      return { ...state, error: action.payload };
    case MessageActionTypes.POST_MESSAGE:
      console.log("post reducer")
      return {...state, messages: state.messages.concat(action.payload) }
    default: return state;
  }
};
