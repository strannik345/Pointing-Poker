import { Dispatch } from 'redux';
import { IMessage, MessageAction, MessageActionTypes } from '../../interfaces/chat';
import axios from '../../services/api';

export const fetchMessages = () => async (dispatch: Dispatch<MessageAction>) => {
  
  try {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES });
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const response = await axios.get(`/api/get-message`);
    console.log(response.data);
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_SUCCESS, payload: response.data});
  } catch (e) {
    // dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error get...' });
    setTimeout(()=>{
      fetchMessages();
    }, 5000)
  }
};
export const postMessage = (message:IMessage) =>async (dispatch: Dispatch<MessageAction>) =>{
  try{
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const res = await axios.post(`/api/new-message`, message);
    dispatch({type: MessageActionTypes.POST_MESSAGE, payload: message});
  }catch (e) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error post...' });
  }
  
}
