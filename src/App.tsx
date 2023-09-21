import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { router } from "./components/router";
import { RouterProvider } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { SSYKoccupationdescriptionReducer } from "./reducers/SSYKoccupationdescriptionReducer";
import { ISSYKData } from "./models/ISsykData";
import { getSsykDescription } from "./services/getSsykDescriptionServices";
import { SSYKdataContext } from "./context/SSYKdataContext";
// import { SSYKdataDispatchContext } from "./context/SSYKdataDispatchContext";
import { ForecastReducer } from "./reducers/ForecastReducer";
import { getCurrentOccupationalForecast } from "./services/getCurrentOccupationalForecast";
import { ForecastContext } from "./context/ForecastContext";

export function App() {
  const [SSYKdata, dispatch] = useReducer(SSYKoccupationdescriptionReducer, {
    title: "",
    variables: [],
  });

  const [forecastData, forecastDispatch] = useReducer(ForecastReducer, []);

  useEffect(() => {
    if (SSYKdata.variables.length > 0) return;

    const getSSYKData = async () => {
      const SSYKdata: ISSYKData = await getSsykDescription();
      dispatch({ type: "GOTDATA", payload: JSON.stringify(SSYKdata) });
    };
    if (SSYKdata.variables.length === 0) getSSYKData();
  });

  useEffect(() => {
    if (forecastData.length > 0) return;
    const getForecastData = async () => {
      const forecastData = await getCurrentOccupationalForecast();
      console.log(forecastData);

      forecastDispatch({
        type: "GOT_DATA",
        payload: JSON.stringify(forecastData),
      });
    };
    if (forecastData.length === 0) {
      getForecastData();
    }
  });

  return (
    <>
      <DigiTypography>
        <SSYKdataContext.Provider value={SSYKdata}>
          <ForecastContext.Provider value={forecastData}>
            {/* <SSYKdataDispatchContext.Provider value={dispatch}> */}
            <RouterProvider router={router}></RouterProvider>
            {/* </SSYKdataDispatchContext.Provider> */}
          </ForecastContext.Provider>
        </SSYKdataContext.Provider>
      </DigiTypography>
    </>
  );
}
export default App;
