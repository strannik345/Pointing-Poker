import { Dispatch } from 'redux';
import { IMessage, MessageAction, MessageActionTypes } from '../../interfaces/chat';
import axios from '../../services/api';

export const fetchMessages = () => async (dispatch: Dispatch<MessageAction>) => {
  
  try {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES });
    const response = await axios.get(`/api/get-message`);
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_SUCCESS, payload: response.data});
  } catch (e) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error...' });
  }
};
export const postMessage = (message:IMessage) =>async (dispatch: Dispatch<MessageAction>) =>{
  try{
  const res = await axios.post(`/api/new-message`, message);
  dispatch({type: MessageActionTypes.POST_MESSAGE, payload: message});
  }catch (e) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error...' });
  }
  
}
