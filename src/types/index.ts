// constants

export enum ActionType {
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
}


//interface
export interface FetchDataAction {
    type: ActionType.FETCH_DATA;
}
export interface FetchDataSuccessAction {
    type: ActionType.FETCH_DATA_SUCCESS;
    payload: any[];
    count: number;
}
export interface FetchErrorAction {
    type: ActionType.FETCH_ERROR;
    payload: string;
}

export interface dataState {
    isLoading: boolean;
    error: null | string;
    data: any[];
    count: number;
}

//type
export type dataAction =
    | FetchDataAction
    | FetchDataSuccessAction
    | FetchErrorAction;

