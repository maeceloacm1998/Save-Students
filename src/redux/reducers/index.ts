import {combineReducers} from 'redux';
import {PeriodItemsReducer} from './periodItemsReducer';

export const rootReducer = combineReducers({
  getPeriodItems: PeriodItemsReducer,
});

export type ApplicationReducer = ReturnType<typeof rootReducer>;
