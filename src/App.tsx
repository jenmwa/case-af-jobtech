import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { router } from "./components/router";
import { RouterProvider } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { SSYKoccupationdescriptionReducer } from "./reducers/SSYKoccupationdescriptionReducer";
import { ISSYKData } from "./models/ISsykData";
import { getSsykDescription } from "./services/getSsykDescriptionServices";
import { SSYKdataContext } from "./context/SSYKdataContext";
import { ForecastReducer } from "./reducers/ForecastReducer";
import { getCurrentOccupationalForecast } from "./services/getCurrentOccupationalForecast";
import { ForecastContext } from "./context/ForecastContext";
import { EnrichedOccupationReducer } from "./reducers/EnrichedOccupationReducer";
import { EnrichedOccupationContext } from "./context/EnrichedOccupationContext";

export function App() {
  const [SSYKdata, dispatch] = useReducer(SSYKoccupationdescriptionReducer, {
    title: "",
    variables: [],
  });

  const [forecastData, forecastDispatch] = useReducer(ForecastReducer, []);

  const [enrichedOccupation, enrichedOccupationDispatch] = useReducer(
    EnrichedOccupationReducer,
    []
  );

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
        <EnrichedOccupationContext.Provider
          value={{
            stateEnrichedOccupation: enrichedOccupation,
            dispatchEnrichedOccupation: enrichedOccupationDispatch,
          }}
        >
          <SSYKdataContext.Provider value={SSYKdata}>
            <ForecastContext.Provider value={forecastData}>
              <RouterProvider router={router}></RouterProvider>
            </ForecastContext.Provider>
          </SSYKdataContext.Provider>
        </EnrichedOccupationContext.Provider>
      </DigiTypography>
    </>
  );
}
export default App;
