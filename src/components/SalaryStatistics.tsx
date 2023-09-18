import {
  ChartLineData,
  QuoteMultiContainerHeadingLevel,
} from "@digi/arbetsformedlingen";
import { DigiChartLine } from "@digi/arbetsformedlingen-react";
// import { DigiBarChart } from "@digi/arbetsformedlingen-react";

interface ISalaryStatisticsProps {
  keysAsArray: string[];
  valuesAsArray: number[];
}

export const SalaryStatistics = ({
  keysAsArray,
  valuesAsArray,
}: ISalaryStatisticsProps) => {
  const afChartData: ChartLineData = {
    data: {
      xValues: [1, 2, 3, 4, 5],
      series: [
        {
          yValues: valuesAsArray,
          title: "Medellön",
        },
      ],
      xValueNames: keysAsArray,
    },
    x: "År",
    y: "y-axis",
    title: "Medellön Stapeldiagram",
    subTitle: "testing",
    infoText: "infotext",
    meta: {
      labelProperties: {
        significantDigits: 2,
        shortHand: true,
      },
    },
  };

  return (
    <>
      löneutveckling
      <div style={{ width: "95%", height: "400px", background: "lightgrey" }}>
        <DigiChartLine
          afChartData={afChartData}
          afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
        ></DigiChartLine>
      </div>
    </>
  );
};
