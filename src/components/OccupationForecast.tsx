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

  const checkDeficiencyValues = (bristvarde: number) => {
    if (bristvarde <= 2) {
      return { value: "400", text: "Ej brist" };
    } else if (bristvarde === 3 || bristvarde === 4) {
      return { value: "250", text: "I balans" };
    } else if (bristvarde >= 5) {
      return { value: "60", text: "Hög" };
    } else {
      return { value: "0", text: "Unknown" };
    }
  };

  const bristvarde2023 = Number(deficiencyValue2023?.bristvarde);
  const bristvarde2026 = Number(deficiencyValue2026?.bristvarde);

  const result2023 = checkDeficiencyValues(bristvarde2023);
  const result2026 = checkDeficiencyValues(bristvarde2026);

  const htmlSVG2023 = (
    <div>
      <h4>2023</h4>
      <svg width="200" height="200">
        <g transform="rotate(-190 100 100)">
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="lightgrey"
            strokeWidth="2rem"
            strokeDasharray="439.8"
            strokeDashoffset="0"
          ></circle>
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="#ca2c92"
            strokeWidth="2rem"
            strokeDasharray="500"
            strokeDashoffset={result2023?.value}
          ></circle>
        </g>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          {result2023?.text}
        </text>
      </svg>
    </div>
  );

  const htmlSVG2026 = (
    <div>
      <h4>2026</h4>
      <svg width="200" height="200">
        <g transform="rotate(-190 100 100)">
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="lightgrey"
            strokeWidth="2rem"
            strokeDasharray="439.8"
            strokeDashoffset="0"
          ></circle>
          <circle
            r="70"
            cx="100"
            cy="100"
            fill="transparent"
            stroke="#ca2c92"
            strokeWidth="2rem"
            strokeDasharray="500"
            strokeDashoffset={result2026?.value}
          ></circle>
        </g>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          {result2026?.text}
        </text>
      </svg>
    </div>
  );

  return (
    <>
      <p>Framtidsprognos</p>
      {htmlSVG2023}
      <p>Framtidsprognos</p>
      {htmlSVG2026}
    </>
  );
};
