import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { ticketsReducer } from './ticketsReducer';
import { transfersReducer } from './transfersReducer';

export const rootReducer = combineReducers({
    ticketsData: ticketsReducer,
    transfersReducer: transfersReducer,
    sort: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;