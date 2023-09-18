import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";
import { ISearchByText } from "../models/ISearchByText";
import { matchByText } from "../services/matchByTextServices";
import { useState } from "react";
import { IOccupation } from "../models/IOccupation";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";

export default function Main() {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchButtonClicked, setSearchButtonClicked] = useState<boolean>(false);

  const getWorkData = async (search: ISearchByText) => {
    setSearchButtonClicked(true);
    setIsLoading(true);
    const data = await matchByText(search);
    console.log(data)
    setRelatedOccupations(data.related_occupations);
    setIsLoading(false);
  }

  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm getWorkData={getWorkData} />
          {searchButtonClicked ? <SearchResults relatedOccupations={relatedOccupations} isLoading={isLoading}/>
          : <SearchResultsPlaceholder />}
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}
