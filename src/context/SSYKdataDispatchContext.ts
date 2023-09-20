import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/SSYKoccupationdesriptionReducer";


export const SSYKdataDispatchContext = createContext<Dispatch<IAction>>(() => { return; })