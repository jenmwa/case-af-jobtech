import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";
import SearchEducation from "./SearchEducation";
import SearchEducationResults from "./SearchEducationResults";
import { useState } from "react";
import { IEducations } from "../models/IEducations";

export default function Education() {
  const [eduResult, setEduResult] = useState<IEducations>({
    hits: 0,
    result: [],
  });

  console.log("ändrad?", eduResult);
  return (
    <DigiLayoutContainer>
      <MainFlex>
        <SearchEducation setEduResult={setEduResult}></SearchEducation>
        <SearchEducationResults />
      </MainFlex>
    </DigiLayoutContainer>
  );
}
