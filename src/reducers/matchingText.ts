import { ISSYKData } from "../models/ISsykData";

interface IAction {
  type: string;
  payload: string;
}

export const matchingText = (matchingText: ISSYKData, action: IAction) => {
  if (action.type === "GOTDATA")

    return matchingText;
}