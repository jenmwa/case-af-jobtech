import { IOccupation } from "../models/IOccupation";

interface IAction {
  type: string;
  payload: string;
}

export const MatchByTextReducers = (getData: IOccupation[], action: IAction) => {
  if (action.type === "GOTDATA")

    return getData;
}