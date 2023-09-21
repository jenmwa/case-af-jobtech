import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";
import SearchEducation from "./SearchEducation";
import SearchEducationResults from "./SearchEducationResults";

export default function Education() {
  return (
    <DigiLayoutContainer>
      <MainFlex>
        <SearchEducation />
        <SearchEducationResults />
      </MainFlex>
    </DigiLayoutContainer>
  )
}