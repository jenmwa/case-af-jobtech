import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";
import SearchEducation from "./SearchEducation";
import SearchEducationResults from "./SearchEducationResults";
import { useState } from "react";
import { IEducations } from "../models/IEducations";
import { useOutletData } from "../context/useOutletData";

export default function Education() {
  const [eduResult, setEduResult] = useState<IEducations>({
    hits: 0,
    result: [],
  });
  const [showNoResult, setShowNoResult] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const { searchEduData, setSearchEduData } = useOutletData();

  return (
    <DigiLayoutContainer>
      <MainFlex>
        <SearchEducation
          setEduResult={setEduResult}
          showNoResult={showNoResult}
          setShowNoResult={setShowNoResult}
          setSearched={setSearched}
          setSerachEduData = {setSearchEduData}
        ></SearchEducation>
        <SearchEducationResults
          showNoResult={showNoResult}
          searchEduData={searchEduData}
        ></SearchEducationResults>
      </MainFlex>
    </DigiLayoutContainer>
  );
}
