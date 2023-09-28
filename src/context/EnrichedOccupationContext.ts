import { createContext } from "react";
import { IOccupation } from "../models/IOccupation";

interface IAction {
  type: string;
  payload: IOccupation[];
}

export const EnrichedOccupationContext = createContext<{
  stateEnrichedOccupation: IOccupation[];
  dispatchEnrichedOccupation: React.Dispatch<IAction>;
}>({
  stateEnrichedOccupation: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatchEnrichedOccupation: function (value: IAction): void {
    throw new Error("Function not implemented.");
  }
});
