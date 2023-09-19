import { IDeficiencyValue } from "./Occupation";

interface IOccupationForecast {
  deficiencyValue2023: IDeficiencyValue | undefined;
  deficiencyValue2026: IDeficiencyValue | undefined;
}

export const OccupationForecast = ({
  deficiencyValue2023,
  deficiencyValue2026,
}: IOccupationForecast) => {
  console.log(deficiencyValue2023);

  if (Number(deficiencyValue2023?.bristvarde) <= 2) {
    console.log("no need");
  } else if (Number(deficiencyValue2023?.bristvarde) === 3) {
    console.log("looking stable");
  } else if (Number(deficiencyValue2023?.bristvarde) >= 4) {
    console.log("ALL THE NEED!");
  }

  return (
    <>
      <p>Framtidsprognos</p>
      <p>bristvärde 2023: {deficiencyValue2023?.bristvarde}</p>
      <p>bristvärde 2026: {deficiencyValue2026?.bristvarde}</p>
    </>
  );
};
