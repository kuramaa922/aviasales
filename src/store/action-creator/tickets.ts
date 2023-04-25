import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Dispatch } from 'redux';
import { CountAction, CountActionType } from '../../types/count';
import { FilterActionType, SortActionType } from '../../types/filter';
import { TicketsAction, TiscketsActionType } from '../../types/tickets';
import { TransfersAction, TransfersActionType } from '../../types/transfers';

type SortCountType = CountAction | FilterActionType;

export const requestTickets = (dispatch: Dispatch<TicketsAction>, id: string): void => {
    dispatch({ type: TiscketsActionType.FETH_TIKETS });
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
        .then((tickets) => {
            if (tickets.status === 500) {
                requestTickets(dispatch, id);
            } else if (tickets.status === 200) {
                return tickets.json();
            } else {
                dispatch({ type: TiscketsActionType.FETH_TIKETS_ERROR, payload: true });
                throw new Error('Ошибка');
            }
        })
        .then((tickets) => {
            if (tickets.stop) {
                dispatch({ type: TiscketsActionType.FETH_TIKETS_SUCCESS });
                return;
            }
            if (tickets.tickets.length) {
                dispatch({ type: TiscketsActionType.FETH_TIKETS_SUCCESS_PART, payload: tickets.tickets });
                requestTickets(dispatch, id);
            }
        })
        .catch((err) => err);
};

export const asyncSetTickets = (id: string) => {
    return (dispatch: Dispatch<TicketsAction>) => {
        requestTickets(dispatch, id);
    };
};

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
export const onChange = (list: CheckboxValueType[]) => {
    return (dispatch: Dispatch<TransfersAction>) => {
        dispatch({ type: TransfersActionType.CHECKED_LIST, payload: list });
        dispatch({ type: TransfersActionType.INDETERMINATE, payload: !!list.length && list.length < plainOptions.length });
        dispatch({ type: TransfersActionType.CHECK_ALL, payload: list.length === plainOptions.length });
    };
};

export const onCheckAllChange = (e: CheckboxChangeEvent) => {
    return (dispatch: Dispatch<TransfersAction>) => {
        dispatch({ type: TransfersActionType.CHECKED_LIST, payload: e.target.checked ? plainOptions : [] });
        dispatch({ type: TransfersActionType.INDETERMINATE, payload: false });
        dispatch({ type: TransfersActionType.CHECK_ALL, payload: e.target.checked });
    };
};

export const setFilter = (sort: string) => {
    return (dispatch: Dispatch<SortCountType>) => {
        dispatch({ type: SortActionType.SET_SORT, payload: sort });
        dispatch({ type: CountActionType.RESET_COUNT, payload: 5 });
    };
};
