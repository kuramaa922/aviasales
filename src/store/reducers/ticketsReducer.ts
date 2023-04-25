import { TicketsAction, TicketState, TiscketsActionType } from '../../types/tickets';

const initialState: TicketState = {
    ticketsData: [],
    loading: false,
    error: null,
};

export const ticketsReducer = (state = initialState, action: TicketsAction): TicketState => {
    switch (action.type) {
        case TiscketsActionType.FETH_TIKETS:
            return { loading: true, error: null, ticketsData: [...state.ticketsData] };

        case TiscketsActionType.FETH_TIKETS_SUCCESS_PART:
            return { loading: state.loading, error: null, ticketsData: [...state.ticketsData, ...action.payload] };

        case TiscketsActionType.FETH_TIKETS_SUCCESS:
            return { loading: false, error: null, ticketsData: [...state.ticketsData] };

        case TiscketsActionType.FETH_TIKETS_ERROR:
            return { loading: false, error: action.payload, ticketsData: [] };

        default:
            return state;
    }
};
