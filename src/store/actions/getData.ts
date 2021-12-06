import axios from 'axios';
import { Dispatch } from 'react';
import { dataAction } from '../../types';
import {
    fetchErrorAction,
    fetchDataAction,
    fetchDataSuccessAction,
} from '../reducers/dataReducer';

//get data 
export const getData = (url: string = '') => async (dispatch: Dispatch<dataAction>) => {
    try {
        dispatch(fetchDataAction());
        const res = await axios.get(
            url
        );
        dispatch(fetchDataSuccessAction(res.data.results,res.data.count));
    } catch (e) {
        dispatch(fetchErrorAction('Fetch error '));
    }
};
