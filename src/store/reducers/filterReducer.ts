import { FilterState, FilterActionType, SortActionType } from '../../types/filter';

const initialState: FilterState = {
    sort: 'price',
};

export const filterReducer = (state = initialState, action: FilterActionType): FilterState => {
    switch (action.type) {
        case SortActionType.SET_SORT:
            return { ...state, sort: action.payload };
        default:
            return state;
    }
};