import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";
import { ISearchByText } from "../models/ISearchByText";
import { matchByText } from "../services/matchByTextServices";
import { useState } from "react";
import { IOccupation } from "../models/IOccupation";

export default function Main() {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);

  const getWorkData = async (search: ISearchByText) => {
    const data = await matchByText(search);
    console.log(data)
    setRelatedOccupations(data.related_occupations);
  }

  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm getWorkData={getWorkData} />
          <SearchResults relatedOccupations={relatedOccupations} />
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}
