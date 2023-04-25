export interface CountState {
    count: number;
}

export enum CountActionType {
    ADD_COUNT = 'ADD_COUNT',
    RESET_COUNT = 'RESET_COUNT',
}

interface AddCountAction {
    type: CountActionType.ADD_COUNT;
    payload: number;
}

interface ResetCountAction {
    type: CountActionType.RESET_COUNT;
    payload: number;
}

export type CountAction = AddCountAction | ResetCountAction;
