import {
    FetchErrorAction,
    FetchDataAction,
    FetchDataSuccessAction,
    dataAction,
    ActionType,
    dataState,
} from '../../types';

const initialState: dataState = {
    isLoading: false,
    error: null,
    data: [],
    count: 0,
};

export const fetchDataAction = (): FetchDataAction => ({
    type: ActionType.FETCH_DATA,
});

export const fetchDataSuccessAction = (
    payload: any[],
    count: number,
): FetchDataSuccessAction => ({
    type: ActionType.FETCH_DATA_SUCCESS,
    payload,
    count,
});

export const fetchErrorAction = (payload: string): FetchErrorAction => ({
    type: ActionType.FETCH_ERROR,
    payload,
});

export const dataReducer = (
    state = initialState,
    action: dataAction
): dataState => {
    switch (action.type) {
        case ActionType.FETCH_DATA:
            return { isLoading: true, error: null, data: [],count:0 };
        case ActionType.FETCH_DATA_SUCCESS:
            return { isLoading: false, error: null, data: action.payload,count:action.count };
        case ActionType.FETCH_ERROR:
            return { isLoading: false, error: action.payload, data: [],count:0 };
        default:
            return state;
    }
};

