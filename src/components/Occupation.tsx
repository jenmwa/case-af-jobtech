import { useNavigate, useParams } from "react-router-dom";
import { OccupationShow } from "./OccupationShow";
import { useContext, useEffect, useState } from "react";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { getCurrentOccupationalForecast } from "../services/getCurrentOccupationalForecast";
import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";
import { ISCBData } from "../models/IGetSCBStatisticsSalary";
import { useOutletData } from "../context/useOutletData";
import { SSYKdataContext } from "../context/SSYKdataContext";
import { useSSYKDetails } from "../hooks/useSSYKDetails";

export interface IDeficiencyValue {
  bristvarde: number;
}

export const Occupation = () => {
  const ssykdata = useContext(SSYKdataContext);
  const { searchData } = useOutletData();

  const conceptTaxonomyId = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [chartLineXValues, setChartLineXValues] = useState<string[]>([]);
  const [chartLineYValues, setChartLineYValues] = useState<number[]>([]);
  const [deficiencyValue2023, setDeficiencyValue2023] =
    useState<IDeficiencyValue>();
  const [deficiencyValue2026, setDeficiencyValue2026] =
    useState<IDeficiencyValue>();

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

  //sätt i app så hämtar vi den från start, lägg i context så vi kommer åt för sök i routern.
  useEffect(() => {
    const getForecast = async () => {
      try {
        const getData = await getCurrentOccupationalForecast();
        console.log(getData);
        if (getData) {
          console.log(getData);
          findDeficiencyValues(getData);
        } else {
          console.log("oops, something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getForecast();
  }, []);

  const findDeficiencyValues = (getData: ICurrentOccupationalForecast[]) => {
    const data = getData.filter(
      (findMatch) => findMatch.ssyk === Number(ssykToMatch)
    );

    console.log(data);
    if (data.length > 0) {
      const findDeficiencyValue23 = data.find(
        (rightMatch) => rightMatch.ar === 23
      );
      console.log(findDeficiencyValue23?.bristvarde);
      const findDeficiencyValue26 = data.find(
        (rightMatch) => rightMatch.ar === 26
      );
      console.log(findDeficiencyValue26?.bristvarde);
      setDeficiencyValue2023(findDeficiencyValue23);
      setDeficiencyValue2026(findDeficiencyValue26);
    }
  };

  const checkDeficiencyValues = (deficiencyValue: number) => {
    if (deficiencyValue <= 2) {
      return { value: "400", text: "Ej brist" };
    } else if (deficiencyValue === 3 || deficiencyValue === 4) {
      return { value: "250", text: "I balans" };
    } else if (deficiencyValue >= 5) {
      return { value: "60", text: "Hög" };
    } else {
      return { value: "500", text: "Ej Tillgängligt" };
    }
  };

  const deficiencyValue2023variable = Number(deficiencyValue2023?.bristvarde);
  const deficiencyValue2026variable = Number(deficiencyValue2026?.bristvarde);

  const deficiencyValueData2023 = checkDeficiencyValues(
    deficiencyValue2023variable
  );
  const deficiencyValueData2026 = checkDeficiencyValues(
    deficiencyValue2026variable
  );

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
          deficiencyValueData2023={deficiencyValueData2023}
          deficiencyValueData2026={deficiencyValueData2026}
        ></OccupationShow>
      </div>
    </>
  );
};
