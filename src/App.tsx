import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { router } from "./components/router";
import { RouterProvider } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { SSYKoccupationdescriptionReducer } from "./reducers/SSYKoccupationdesriptionReducer";
import { ISSYKData } from "./models/ISsykData";
import { getSsykDescription } from "./services/getSsykDescriptionServices";
import { SSYKdataContext } from "./context/SSYKdataContext";
import { SSYKdataDispatchContext } from "./context/SSYKdataDispatchContext";

export function App() {
  const [SSYKdata, dispatch] = useReducer(SSYKoccupationdescriptionReducer, {
    title: "",
    variables: [],
  });

  useEffect(() => {
    if (SSYKdata.variables.length > 0) return;

    const getSSYKData = async () => {
      const SSYKdata: ISSYKData = await getSsykDescription();
      dispatch({ type: "GOTDATA", payload: JSON.stringify(SSYKdata) });
    };
    if (SSYKdata.variables.length === 0) getSSYKData();
  });

  return (
    <>
      <DigiTypography>
        <SSYKdataContext.Provider value={SSYKdata}>
          <SSYKdataDispatchContext.Provider value={dispatch}>
            <RouterProvider router={router}></RouterProvider>
          </SSYKdataDispatchContext.Provider>
        </SSYKdataContext.Provider>
      </DigiTypography>
    </>
  );
}
export default App;
