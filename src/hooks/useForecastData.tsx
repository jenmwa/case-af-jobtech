import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";

export const checkDeficiencyValues = (deficiencyValue: number) => {
  if (deficiencyValue <= 2) {
    return { value: "400", text: "Ej brist" };
  } else if (deficiencyValue === 3 || deficiencyValue === 4) {
    return { value: "250", text: "I balans" };
  } else if (deficiencyValue >= 5) {
    return { value: "60", text: "Hög" };
  } else {
    return { value: "500", text: "Ej Tillgängligt" };
  }
};

export const useForecastData = (
  forecastData: ICurrentOccupationalForecast[],
  ssykToMatch: string
) => {
  if (!forecastData || !ssykToMatch) {
    console.log("Cant find in the list");
    return;
  }
  const foundForecastData = forecastData.filter(
    (findMatch) => findMatch.ssyk === Number(ssykToMatch)
  );
  console.log(foundForecastData);

  let deficiencyValue23 = null;
  let deficiencyValue26 = null;

  if (foundForecastData.length > 0) {
    const findDeficiencyValue23 = foundForecastData.find(
      (rightMatch) => rightMatch.ar === 23
    );
    console.log(findDeficiencyValue23?.bristvarde);

    if (findDeficiencyValue23) {
      deficiencyValue23 = checkDeficiencyValues(
        findDeficiencyValue23.bristvarde
      );
    }
    const findDeficiencyValue26 = foundForecastData.find(
      (rightMatch) => rightMatch.ar === 26
    );
    console.log(findDeficiencyValue26?.bristvarde);
    if (findDeficiencyValue26) {
      deficiencyValue26 = checkDeficiencyValues(
        findDeficiencyValue26.bristvarde
      );
    }
  }
  return { deficiencyValue23, deficiencyValue26 };
};
