import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MessageActionCreators from '../../store/action-creators/message';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MessageActionCreators, dispatch);
};