import { QuoteMultiContainerHeadingLevel } from "@digi/arbetsformedlingen";
import { DigiChartLine } from "@digi/arbetsformedlingen-react";
// import { DigiBarChart } from "@digi/arbetsformedlingen-react";
import { IChartData } from "../models/IChartData";

interface ISalaryStatisticsProps {
  keysAsArray: number[];
  valuesAsArray: number[];
}

export const SalaryStatistics = ({
  // keysAsArray,
  valuesAsArray,
}: ISalaryStatisticsProps) => {
  const afChartData: IChartData = {
    data: {
      xValues: [1, 2, 3, 4, 5, 6],
      series: [
        {
          yValues: valuesAsArray,
          title: "Medellön",
        },
      ],
      xValueNames: ["2017", "2018", "2019", "2020", "2021", "2022"],
    },
    x: "År",
    y: "y-axis",
    title: "Löneutveckling 2016-2022",
    subTitle: "testing",
    infoText: "infotext",
  };

  return (
    <>
      <div
        style={{
          width: "90%",
          height: "400px",
          background: "lightgrey",
          padding: "1rem",
        }}
      >
        <DigiChartLine
          afChartData={afChartData}
          afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
        ></DigiChartLine>
      </div>
    </>
  );
};
