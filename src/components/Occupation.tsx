import { useParams } from "react-router-dom";
import { ShowOccupation } from "./ShowOccupation";
import { IOccupation } from "../models/IOccupation";

// testknapp
// const ourTestOccupationObject = { ssyk: "2500" };
// const testParams = () => {
//   console.log("clicketi", ourTestOccupationObject.ssyk);
//   navigate("/occupation/" + ourTestOccupationObject.ssyk);
// };
// return<>
//       <DigiButton onAfOnClick={testParams}>Testa Params</DigiButton>
//       </>

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

  const occupationFound = ourList.find(
    (occupation) => occupation.occupation_group.ssyk === ssykObject.id
  );

  if (occupationFound) {
    console.log("Found match!");
  } else {
    console.log("no match!");
  }
  return (
    <>
      <ShowOccupation occupationFound={occupationFound}></ShowOccupation>
    </>
  );
};
