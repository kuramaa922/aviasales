import { TransfersAction, TransfersActionType, TransfersState } from '../../types/transfers';

const initialState: TransfersState = {
    checkedList: [],
    indeterminate: false,
    checkAll: false,
};

export const transfersReducer = (state = initialState, action: TransfersAction): TransfersState => {
    switch (action.type) {
        case TransfersActionType.CHECKED_LIST:
            return { checkedList: [...action.payload], checkAll: false, indeterminate: true };

        case TransfersActionType.INDETERMINATE:
            return { checkedList: [...state.checkedList], indeterminate: action.payload, checkAll: state.checkAll };

        case TransfersActionType.CHECK_ALL:
            return { checkAll: action.payload, checkedList: [...state.checkedList], indeterminate: state.indeterminate };

        default:
            return state;
    }
};