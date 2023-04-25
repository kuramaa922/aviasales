import { CheckboxValueType } from 'antd/es/checkbox/Group';

export interface TransfersState {
    checkedList: CheckboxValueType[];
    indeterminate: boolean;
    checkAll: boolean;
}

export enum TransfersActionType {
    CHECKED_LIST = 'CHECKED_LIST',
    INDETERMINATE = 'INDETERMINATE',
    CHECK_ALL = 'CHECK_ALL',
}

interface CheckedListAction {
    type: TransfersActionType.CHECKED_LIST;
    payload: CheckboxValueType[];
}
interface IndeterminateAction {
    type: TransfersActionType.INDETERMINATE;
    payload: boolean;
}
interface CheckAllAction {
    type: TransfersActionType.CHECK_ALL;
    payload: boolean;
}

export type TransfersAction = CheckedListAction | IndeterminateAction | CheckAllAction;