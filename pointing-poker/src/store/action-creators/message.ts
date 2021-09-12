import { Dispatch } from 'redux';
import { MessageAction, MessageActionTypes } from '../../interfaces/chat';
import axios from '../../services/api';

export const fetchMessages = () => async (dispatch: Dispatch<MessageAction>) => {
  try {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES });
    const response = await axios.get(`api/get-message`);
    console.log(response.data);
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_SUCCESS, payload: response.data});
  } catch (e) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error...' });
  }
};
