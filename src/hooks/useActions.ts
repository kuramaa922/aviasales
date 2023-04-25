import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TicketsActionCreators from '../store/action-creator/tickets';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TicketsActionCreators, dispatch);
};