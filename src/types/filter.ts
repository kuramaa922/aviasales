export interface FilterState {
    sort: string;
}

export enum SortActionType {
    SET_SORT = 'SET_SORT',
}

interface SortType {
    type: SortActionType.SET_SORT;
    payload: string;
}

export type FilterActionType = SortType;