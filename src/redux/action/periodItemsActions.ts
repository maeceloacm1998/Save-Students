import {Dispatch} from "react"
import { PeriodItemsProps } from "../../utils";

export interface GetPeriodItems{
  readonly type: "ON_GET_PERIOD_ITEMS";
  payload: Array<PeriodItemsProps>
}

export interface ErrorActionPeriodItems{
  readonly type: "ON_TICKETS_ERROR";
  payload: Error
}

export type PeriodItemsAction = GetPeriodItems | ErrorActionPeriodItems;

export const getPeriodItems = (value: Array<PeriodItemsProps>) => {
  return async (dispatch: Dispatch<PeriodItemsAction>) => {
    try{
      dispatch({
        type: "ON_GET_PERIOD_ITEMS",
        payload: value
      })
    }catch(e){
      console.log(e)
    }
  }
}