import { useNavigate, useParams } from "react-router-dom";
import { OccupationShow } from "./OccupationShow";
import { IOccupation } from "../models/IOccupation";
import { useEffect, useState } from "react";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { getCurrentOccupationalForecast } from "../services/getCurrentOccupationalForecast";
import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";

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
];

export const Occupation = () => {
  const ssykObject = useParams<{ id: string }>();
  console.log(JSON.stringify(ssykObject));

  const [keysAsArray, setKeysAsArray] = useState<number[]>([]);
  const [valuesAsArray, setValuesAsArray] = useState<number[]>([]);
  const [deficiencyValue2023, setDeficiencyValue2023] =
    useState<IDeficiencyValue>();
  const [deficiencyValue2026, setDeficiencyValue2026] =
    useState<IDeficiencyValue>();

  const occupationFound = ourList.find(
    (occupation) => occupation.occupation_group.ssyk === ssykObject.id
  );

  useEffect(() => {
    if (occupationFound) {
      const ssyk = occupationFound.occupation_group.ssyk;

      const getDataSCB = async () => {
        const test = await getSCBStatisticsSalary(ssyk);
        console.log(test);
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
      if (keysAsArray.length === 0) {
        getDataSCB();
      }
    }
  });

  console.log(Number(ssykObject.id));

  //sätt i app så hämtar vi den från start, lägg i context så vi kommer åt för sök i routern.
  useEffect(() => {
    const getForecast = async () => {
      const getData = await getCurrentOccupationalForecast();
      if (getData) {
        console.log(getForecast);
        findDeficiencyValues(getData);
      } else {
        console.log("oops, something went wrong. Please try again.");
      }
    };
    if (getForecast.length === 0) {
      getForecast();
    }
  }, []);

  const findDeficiencyValues = (getData: ICurrentOccupationalForecast[]) => {
    const data = getData?.filter(
      (findMatch) => findMatch.ssyk === Number(ssykObject.id)
    );
    console.log(data);
    if (data) {
      const deficiencyValue23 = data?.find(
        (rightMatch) => rightMatch.ar === 23
      );
      console.log(deficiencyValue23?.bristvarde);
      const deficiencyValue26 = data?.find(
        (rightMatch) => rightMatch.ar === 26
      );
      console.log(deficiencyValue26?.bristvarde);
      setDeficiencyValue2023(deficiencyValue23);
      setDeficiencyValue2026(deficiencyValue26);
    }
  };

  const navigate = useNavigate();
  const handleReturnButton = () => {
    console.log("click");
    navigate("/");
  };

  return (
    <>
      <OccupationShow
        occupationFound={occupationFound}
        valuesAsArray={valuesAsArray}
        keysAsArray={keysAsArray}
        handleReturnButton={handleReturnButton}
        deficiencyValue2023={deficiencyValue2023}
        deficiencyValue2026={deficiencyValue2026}
      ></OccupationShow>
    </>
  );
};
