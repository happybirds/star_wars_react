import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
    user: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
