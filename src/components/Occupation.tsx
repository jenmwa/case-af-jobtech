import { useNavigate, useParams } from "react-router-dom";
import { OccupationShow } from "./OccupationShow";
import { IOccupation } from "../models/IOccupation";
import { useEffect, useState } from "react";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";

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

  const occupationFound = ourList.find(
    (occupation) => occupation.occupation_group.ssyk === ssykObject.id
  );

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
      ></OccupationShow>
    </>
  );
};
