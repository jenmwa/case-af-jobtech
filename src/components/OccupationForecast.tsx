import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import { DigiLayoutColumns } from "@digi/arbetsformedlingen-react";
import { SVGCircle } from "./SVGCircle";

interface IOccupationForecast {
  result2023: {
    value: string;
    text: string;
  };
  result2026: {
    value: string;
    text: string;
  };
}

export const OccupationForecast = ({
  result2023,
  result2026,
}: IOccupationForecast) => {
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
