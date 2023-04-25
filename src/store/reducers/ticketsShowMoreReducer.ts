import { CountAction, CountActionType, CountState } from '../../types/count';

const initialState: CountState = {
    count: 5,
};

export const ticketsShowMoreReducer = (state = initialState, action: CountAction): CountState => {
    switch (action.type) {
        case CountActionType.ADD_COUNT:
            return { count: state.count + action.payload };
        case CountActionType.RESET_COUNT:
            return { count: action.payload };

        default:
            return state;
    }
};