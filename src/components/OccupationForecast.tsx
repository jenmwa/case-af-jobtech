import { DigiLayoutColumns } from "@digi/arbetsformedlingen-react";
import { SVGCircle } from "./SVGCircle";
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";

interface IOccupationForecast {
  result2023: { value: string; text: string };
  result2026: { value: string; text: string };
}

export const OccupationForecast = ({
  result2023,
  result2026,
}: IOccupationForecast) => {
  // console.log(deficiencyValue2023);

  // const checkDeficiencyValues = (bristvarde: number) => {
  //   if (bristvarde <= 2) {
  //     return { value: "400", text: "Ej brist" };
  //   } else if (bristvarde === 3 || bristvarde === 4) {
  //     return { value: "250", text: "I balans" };
  //   } else if (bristvarde >= 5) {
  //     return { value: "60", text: "Hög" };
  //   } else {
  //     return { value: "500", text: "Ej Tillgängligt" };
  //   }
  // };

  // const bristvarde2023 = Number(deficiencyValue2023?.bristvarde);
  // const bristvarde2026 = Number(deficiencyValue2026?.bristvarde);

  // const result2023 = checkDeficiencyValues(bristvarde2023);
  // const result2026 = checkDeficiencyValues(bristvarde2026);

  return (
    <>
      <h3>Framtidsprognos</h3>
      <p>
        Arbetsförmedlingen bedömning gällande bristvärdet för [yrkesrollen].
      </p>
      <DigiLayoutColumns
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.TWO}
      >
        <SVGCircle
          title="2023"
          value={result2023.value}
          text={result2023.text}
        ></SVGCircle>
        <SVGCircle
          title="2026"
          value={result2026.value}
          text={result2026.text}
        ></SVGCircle>
      </DigiLayoutColumns>
    </>
  );
};
