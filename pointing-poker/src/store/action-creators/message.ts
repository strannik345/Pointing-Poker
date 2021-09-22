import { Dispatch } from 'redux';
import { IMessage, MessageAction, MessageActionTypes } from '../../interfaces/chat';
import axios from '../../services/api';

export const fetchMessages = () => async (dispatch: Dispatch<MessageAction>) => {
  
  // try {
  //   // dispatch({ type: MessageActionTypes.FETCH_MESSAGES });
  //   axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  //   const response = await axios.get(`/api/get-message`);
  //   dispatch({ type: MessageActionTypes.FETCH_MESSAGES_SUCCESS, payload: response.data});
  //   fetchMessages();
  // } catch (e) {
  //   setTimeout(()=>{
  //     fetchMessages();
  //   }, 500)
  //   // dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error get...' });
  // }
};
export const postMessage = (message:IMessage) => async (dispatch: Dispatch<MessageAction>) =>{
  try{
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    await axios.post(`/api/new-message`, message);
    dispatch({type: MessageActionTypes.POST_MESSAGE, payload: message});
  }catch (e) {
    dispatch({ type: MessageActionTypes.FETCH_MESSAGES_ERROR, payload: 'Error post...' });
    
  }
  
}
