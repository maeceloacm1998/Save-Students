/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PeriodItemsProps } from "../../utils/types"

type PeriodItemsModel = {
  periodItems: Array<PeriodItemsProps>
}

const initialState: PeriodItemsModel = {
  periodItems: [],
}

export const PeriodItemsReducer = (state:PeriodItemsModel = initialState, action:any) => {
  switch(action.type) {
    case "ON_GET_PERIOD_ITEMS":
      return {
        ...state,
        periodItems: action.payload,
      }
    default:
      return state
  }
}