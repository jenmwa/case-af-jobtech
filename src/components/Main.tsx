import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";
import { ISearchByText } from "../models/ISearchByText";
import { matchByText } from "../services/matchByTextServices";
import { useState } from "react";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";
import { useOutletData } from "../context/useOutletData";

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchData, setSearchData } = useOutletData();

  const getWorkData = async (search: ISearchByText) => {
    setIsLoading(true);
    const data = await matchByText(search);
    setSearchData(data);
    setIsLoading(false);
  };

  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm getWorkData={getWorkData} />
          {searchData === null ? (
            <SearchResultsPlaceholder />
          ) : (
            <SearchResults isLoading={isLoading} />
          )}
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}
