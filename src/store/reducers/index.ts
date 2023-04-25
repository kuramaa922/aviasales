import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { ticketsReducer } from './ticketsReducer';
import { ticketsShowMoreReducer } from './ticketsShowMoreReducer';
import { transfersReducer } from './transfersReducer';

export const rootReducer = combineReducers({
    ticketsData: ticketsReducer,
    transfersReducer: transfersReducer,
    count: ticketsShowMoreReducer,
    sort: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;