import { useNavigate, useParams } from "react-router-dom";
import { OccupationShow } from "./OccupationShow";
import { useContext, useEffect, useState } from "react";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { ISCBData } from "../models/IGetSCBStatisticsSalary";
import { useOutletData } from "../context/useOutletData";
import { SSYKdataContext } from "../context/SSYKdataContext";
import { useSSYKDetails } from "../hooks/useSSYKDetails";
import { ForecastContext } from "../context/ForecastContext";
import { useForecastData } from "../hooks/useForecastData";

export interface IDeficiencyValue {
  deficiencyValue23: {
    value: string;
    text: string;
  } | null;
  deficiencyValue26: {
    value: string;
    text: string;
  } | null;
}

export const Occupation = () => {
  const ssykdata = useContext(SSYKdataContext);
  const forecastData = useContext(ForecastContext);
  const { searchData } = useOutletData();

  const conceptTaxonomyId = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [chartLineXValues, setChartLineXValues] = useState<string[]>([]);
  const [chartLineYValues, setChartLineYValues] = useState<number[]>([]);

  // const [forecastDataValues, setForecastDataValues] =
  //   useState<IDeficiencyValue>();
  // const [deficiencyValue2023, setDeficiencyValue2023] =
  //   useState<IDeficienyValueAndText>({ value: "", text: "" });
  // const [deficiencyValue2026, setDeficiencyValue2026] = useState<number>();
  const occupationFound = searchData?.related_occupations.find(
    (occupation) => occupation.concept_taxonomy_id === conceptTaxonomyId.id
  );

  const ssykToMatch = occupationFound?.occupation_group.ssyk || "";
  const findIndexText = useSSYKDetails(ssykToMatch, ssykdata) || "";

  useEffect(() => {
    if (occupationFound) {
      const ssyk = occupationFound.occupation_group.ssyk;

      const getDataSCB = async () => {
        const chartLineData = await getSCBStatisticsSalary(ssyk);
        console.log(chartLineData);
        if (chartLineData) {
          getValuesArray(chartLineData);
        }
      };
      if (chartLineXValues.length === 0) {
        getDataSCB();
      }
    }
  });

  const findForeCastData = useForecastData(forecastData, ssykToMatch);
  console.log(findForeCastData);

  const getValuesArray = (chartLineData: ISCBData[]) => {
    if (chartLineData) {
      const chartLineXValues = chartLineData.map((item) => item.key[1]).flat();
      const chartLineYValues = chartLineData.map((item) => item.values).flat();
      console.log("X Keys Array:", chartLineXValues);
      console.log("Y Values Array:", chartLineYValues);

      const chartLineYValuesToNumbers = chartLineYValues.map(
        (chartLineStringValue) => {
          return parseInt(chartLineStringValue);
        }
      );
      console.log(chartLineYValuesToNumbers);

      setChartLineXValues(chartLineXValues);
      setChartLineYValues(chartLineYValuesToNumbers);
    } else {
      console.log("no data found");
    }
  };

  // const checkDeficiencyValues = (deficiencyValue: number) => {
  //   if (deficiencyValue <= 2) {
  //     return { value: "400", text: "Ej brist" };
  //   } else if (deficiencyValue === 3 || deficiencyValue === 4) {
  //     return { value: "250", text: "I balans" };
  //   } else if (deficiencyValue >= 5) {
  //     return { value: "60", text: "Hög" };
  //   } else {
  //     return { value: "500", text: "Ej Tillgängligt" };
  //   }
  // };

  // const deficiencyValue2023variable = Number(deficiencyValue2023?.bristvarde);
  // const deficiencyValue2026variable = Number(deficiencyValue2026?.bristvarde);

  // const deficiencyValueData2023 = checkDeficiencyValues(
  //   deficiencyValue2023variable
  // );
  // const deficiencyValueData2026 = checkDeficiencyValues(
  //   deficiencyValue2026variable
  // );

  const handleReturnButton = () => {
    navigate("/");
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <OccupationShow
          findIndexText={findIndexText}
          occupationFound={occupationFound}
          chartLineYValues={chartLineYValues}
          chartLineXValues={chartLineXValues}
          handleReturnButton={handleReturnButton}
          findForeCastData={findForeCastData}
          // defValues={defValues}
          // deficiencyValueData2023={deficiencyValueData2023}
          // deficiencyValueData2026={deficiencyValueData2026}
        ></OccupationShow>
      </div>
    </>
  );
};
