import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";
import SearchEducation from "./SearchEducation";
import SearchEducationResults from "./SearchEducationResults";
import { useState } from "react";
//import { IEducations } from "../models/IEducations";
import { useOutletData } from "../context/useOutletData";

export default function Education() {
  // const [eduResult, setEduResult] = useState<IEducations>({
  //   hits: 0,
  //   result: [],
  // });
  const [showNoResult, setShowNoResult] = useState<boolean>(false);
  //const [searched, setSearched] = useState<boolean>(false);
  const { searchEduData, setSearchEduData } = useOutletData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eduSearchHistory, setEduSeachHistory] = useState({});

  return (
    <DigiLayoutContainer>
      <MainFlex>
        <SearchEducation
          //setEduResult={setEduResult}
          showNoResult={showNoResult}
          setShowNoResult={setShowNoResult}
          //setSearched={setSearched}
          setSerachEduData={setSearchEduData}
          setIsLoading={setIsLoading}
          setEduSeachHistory={setEduSeachHistory}
        ></SearchEducation>
        <SearchEducationResults
          showNoResult={showNoResult}
          searchEduData={searchEduData}
          isLoading={isLoading}
          setSerachEduData={setSearchEduData}
          eduSearchHistory={eduSearchHistory}
        ></SearchEducationResults>
      </MainFlex>
    </DigiLayoutContainer>
  );
}
