import { useNavigate, useParams } from "react-router-dom";
import { OccupationShow } from "./OccupationShow";
import { IOccupation } from "../models/IOccupation";
import { useEffect, useState } from "react";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { getCurrentOccupationalForecast } from "../services/getCurrentOccupationalForecast";
import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";
import { ISCBData } from "../models/IGetSCBStatisticsSalary";
import { useOutletData } from "../context/useOutletData";

export interface IDeficiencyValue {
  bristvarde: number;
}
//listmock, lägga resultat från sök i context och hämta?
const ourList: IOccupation[] = [
  {
    id: "GDHs_eoz_uKx",
    occupation_label: "Frontend-utvecklare",
    concept_taxonomy_id: "GDHs_eoz_uKx",
    legacy_ams_taxonomy_id: "7633",
    occupation_group: {
      occupation_group_label: "Mjukvaru- och systemutvecklare m.fl.",
      concept_taxonomy_id: "DJh5_yyF_hEM",
      ssyk: "2512",
    },
  },
  {
    id: "i5hV_FDf_Qnc",
    occupation_label: "Webbtekniker",
    concept_taxonomy_id: "i5hV_FDf_Qnc",
    legacy_ams_taxonomy_id: "7046",
    occupation_group: {
      occupation_group_label: "Webbmaster och webbadministratörer",
      concept_taxonomy_id: "Fv7d_YhP_YmS",
      ssyk: "3515",
    },
  },
  {
    id: "PTs4_wYQ_zDP",
    occupation_label: "Webbdesigner",
    concept_taxonomy_id: "PTs4_wYQ_zDP",
    legacy_ams_taxonomy_id: "3919",
    occupation_group: {
      occupation_group_label: "Designer inom spel och digitala medier",
      concept_taxonomy_id: "Mbt6_3ko_DiD",
      ssyk: "2173",
    },
  },

  {
    id: "YtrL_oQj_sck",
    occupation_label: "Datapedagog/IT-pedagog/Datautbildare",
    concept_taxonomy_id: "YtrL_oQj_sck",
    legacy_ams_taxonomy_id: "3637",
    occupation_group: {
      occupation_group_label: "\u00d6vriga utbildare och instrukt\u00f6rer",
      concept_taxonomy_id: "1CX5_mZw_Vcq",
      ssyk: "3449",
    },
  },
];

export const Occupation = () => {
  const conceptTaxonomyId = useParams<{ id: string }>();
  console.log(conceptTaxonomyId);

  const { searchData } = useOutletData();
  console.log(searchData?.related_occupations);

  const [keysAsArray, setKeysAsArray] = useState<number[]>([]);
  const [valuesAsArray, setValuesAsArray] = useState<number[]>([]);
  const [deficiencyValue2023, setDeficiencyValue2023] =
    useState<IDeficiencyValue>();
  const [deficiencyValue2026, setDeficiencyValue2026] =
    useState<IDeficiencyValue>();

  const occupationFound = ourList.find(
    (occupation) => occupation.concept_taxonomy_id === conceptTaxonomyId.id
  );
  const ssyk = occupationFound?.occupation_group.ssyk;
  console.log(occupationFound?.occupation_label);

  useEffect(() => {
    if (occupationFound) {
      const ssyk = occupationFound.occupation_group.ssyk;

      const getDataSCB = async () => {
        const test = await getSCBStatisticsSalary(ssyk);
        console.log(test);
        if (test) {
          getValuesArray(test);
        }
      };
      if (keysAsArray.length === 0) {
        getDataSCB();
      }
    }
  });

  const getValuesArray = (test: ISCBData[]) => {
    if (test) {
      const keysArray = test.map((item) => item.key[1]).flat();
      const valuesArray = test.map((item) => item.values).flat();
      console.log("Keys Array:", keysArray);
      console.log("Values Array:", valuesArray);

      const keysArrayToNumbers = keysArray.map((stringValue) => {
        return parseInt(stringValue);
      });
      console.log(keysArrayToNumbers);

      const valuesArrayToNumbers = valuesArray.map((stringValue) => {
        return parseInt(stringValue);
      });
      console.log(valuesArrayToNumbers);

      setKeysAsArray(keysArrayToNumbers);
      setValuesAsArray(valuesArrayToNumbers);
    } else {
      console.log("no data found");
    }
  };

  // console.log(Number(ssykObject.id));

  //sätt i app så hämtar vi den från start, lägg i context så vi kommer åt för sök i routern.
  useEffect(() => {
    const getForecast = async () => {
      try {
        const getData = await getCurrentOccupationalForecast();
        console.log(getData);
        if (getData) {
          console.log(await getData);
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
    console.log(getData);
    console.log(ssyk);
    console.log(Number(ssyk));
    const data = getData.filter((findMatch) => findMatch.ssyk === Number(ssyk));

    console.log(data);
    if (data.length > 0) {
      const deficiencyValue23 = data.find((rightMatch) => rightMatch.ar === 23);
      console.log(deficiencyValue23?.bristvarde);
      const deficiencyValue26 = data.find((rightMatch) => rightMatch.ar === 26);
      console.log(deficiencyValue26?.bristvarde);
      setDeficiencyValue2023(deficiencyValue23);
      setDeficiencyValue2026(deficiencyValue26);
    }
  };

  const checkDeficiencyValues = (bristvarde: number) => {
    if (bristvarde <= 2) {
      return { value: "400", text: "Ej brist" };
    } else if (bristvarde === 3 || bristvarde === 4) {
      return { value: "250", text: "I balans" };
    } else if (bristvarde >= 5) {
      return { value: "60", text: "Hög" };
    } else {
      return { value: "500", text: "Ej Tillgängligt" };
    }
  };

  const bristvarde2023 = Number(deficiencyValue2023?.bristvarde);
  const bristvarde2026 = Number(deficiencyValue2026?.bristvarde);

  const result2023 = checkDeficiencyValues(bristvarde2023);
  const result2026 = checkDeficiencyValues(bristvarde2026);

  const navigate = useNavigate();
  const handleReturnButton = () => {
    console.log("click");
    navigate("/");
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <OccupationShow
          occupationFound={occupationFound}
          valuesAsArray={valuesAsArray}
          keysAsArray={keysAsArray}
          handleReturnButton={handleReturnButton}
          deficiencyValue2023={deficiencyValue2023}
          deficiencyValue2026={deficiencyValue2026}
          result2023={result2023}
          result2026={result2026}
        ></OccupationShow>
      </div>
    </>
  );
};
