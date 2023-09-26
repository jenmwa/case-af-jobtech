import {
  ChartLineData,
  LoaderSpinnerSize,
  QuoteMultiContainerHeadingLevel,
} from "@digi/arbetsformedlingen";
// import { DigiChartLine } from "@digi/arbetsformedlingen-react";
import { ChartLineParent, StyledChartLine } from "./styled/CharLine";
import { DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";

interface ISalaryStatisticsProps {
  chartLineXValues: string[];
  chartLineYValues: number[];
  isLoading: boolean;
}

export const SalaryStatistics = ({
  chartLineXValues,
  chartLineYValues,
  isLoading,
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
    subTitle: "Källa: SCB",
    infoText: "",
  };

  return (
    <>
      {isLoading ? (
        <DigiLoaderSpinner afSize={LoaderSpinnerSize.LARGE}></DigiLoaderSpinner>
      ) : (
        <ChartLineParent>
          <StyledChartLine
            afChartData={JSON.stringify(afChartData)}
            afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
          ></StyledChartLine>
        </ChartLineParent>
      )}
    </>
  );
};
