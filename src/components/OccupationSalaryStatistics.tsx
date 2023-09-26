import {
  ChartLineData,
  QuoteMultiContainerHeadingLevel,
} from "@digi/arbetsformedlingen";
import {
  DigiChartLine,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";

interface ISalaryStatisticsProps {
  chartLineXValues: string[];
  chartLineYValues: number[];
}

export const SalaryStatistics = ({
  chartLineXValues,
  chartLineYValues,
}: ISalaryStatisticsProps) => {
  // const chartLineXValuesToIndexArray: number[] = chartLineXValues.map(
  //   (_, index) => index + 1
  // );

  const afChartData: ChartLineData = {
    data: {
      xValues: [1, 2, 3, 4, 5, 6],
      // xValues: chartLineXValuesToIndexArray,
      series: [
        {
          yValues: chartLineYValues,
          title: "Medellön",
        },
      ],
      xValueNames: chartLineXValues,
    },
    x: "År",
    y: "y-axis",
    title: "Löneutveckling 2017-2022",
    subTitle: "test",
    infoText: "",
  };

  return (
    <>
      <DigiLayoutContainer>
        <div
          style={{
            //ordentlig klass istället för styletag
            width: "90%",
            height: "400px",
            background: "lightgrey",
            padding: "1rem",
            position: "relative",
          }}
        >
          <DigiChartLine
            afChartData={JSON.stringify(afChartData)}
            afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
          ></DigiChartLine>
        </div>
      </DigiLayoutContainer>
    </>
  );
};
