import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";
import { ISearchByText } from "../models/ISearchByText";
import { matchByText } from "../services/matchByTextServices";
import { useEffect, useState } from "react";
//import { IOccupation } from "../models/IOccupation";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";
import { useOutletData } from "../context/useOutletData";

export default function Main() {
  //const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchData, setSearchData } = useOutletData();

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  const getWorkData = async (search: ISearchByText) => {
    setIsLoading(true);
    const data = await matchByText(search);
    setSearchData(data.related_occupations);
    //setRelatedOccupations(data.related_occupations);
    setIsLoading(false);
  }

  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm getWorkData={getWorkData} />
          {searchData === null ? <SearchResultsPlaceholder /> : <SearchResults isLoading={isLoading}/>}
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}
