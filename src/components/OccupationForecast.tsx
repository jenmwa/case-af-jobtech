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

  return (
    <>
      <p>Framtidsprognos</p>
      <p>bristvärde 2023: {deficiencyValue2023?.bristvarde}</p>
      <p>bristvärde 2026: {deficiencyValue2026?.bristvarde}</p>
    </>
  );
};
