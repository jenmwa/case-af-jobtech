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

  const checkDeficiencyValues = () => {
    const bristvarde2023 = Number(deficiencyValue2023?.bristvarde);
    const bristvarde2026 = Number(deficiencyValue2026?.bristvarde);

    if (bristvarde2023 <= 2 || bristvarde2026 <= 2) {
      console.log("no need");
      return { value: "400", text: "Ej brist" };
      // return "400";
    } else if (
      bristvarde2023 === 3 ||
      bristvarde2026 === 3 ||
      bristvarde2023 === 4 ||
      bristvarde2026 === 4
    ) {
      console.log("looking stable");
      // setStrokeDashoffsetValue("250");
      return { value: "250", text: "I balans" };
    } else if (bristvarde2023 >= 5 || bristvarde2026 >= 5) {
      console.log("ALL THE NEED!");
      return { value: "60", text: "Hög" };
      // return "60";
    }
  };

  const result = checkDeficiencyValues();
  const htmlSVG = (
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
            strokeDashoffset={result?.value}
          ></circle>
        </g>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          {result?.text}
        </text>
      </svg>
    </div>
  );

  return (
    <>
      <p>Framtidsprognos</p>
      <p>
        Efterfrågan 2023:
        {/* {checkDeficiencyValues()} */}
      </p>
      <p>
        bristvärde 2026:
        {/* {checkDeficiencyValues()} */}
      </p>
      {htmlSVG}
    </>
  );
};

// <div>
// <h4>2023</h4>
// <svg width="200" height="200">
//   <g transform="rotate(-190 100 100)">
//     <circle
//       r="70"
//       cx="100"
//       cy="100"
//       fill="transparent"
//       stroke="lightgrey"
//       stroke-width="2rem"
//       stroke-dasharray="439.8"
//       stroke-dashoffset="0"
//     ></circle>
//     <circle
//       r="70"
//       cx="100"
//       cy="100"
//       fill="transparent"
//       stroke="#ca2c92"
//       stroke-width="2rem"
//       stroke-dasharray="500"
//       stroke-dashoffset={strokeDashoffsetValue}
//     ></circle>
//   </g>
//   {/* <text
//     x="50%"
//     y="50%"
//     dominant-baseline="central"
//     text-anchor="middle"
//   >
//     I balans
//   </text> */}
// </svg>
// </div>
