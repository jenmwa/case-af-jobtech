import {
  DigiExpandableAccordion,
  DigiLoaderSpinner,
  DigiNavigationPagination,
  DigiTag,
} from "@digi/arbetsformedlingen-react";
import { ResultSummary } from "./ResultSummary";
import { LoaderSpinnerSize, TagSize } from "@digi/arbetsformedlingen";
import { useOutletData } from "../context/useOutletData";
import { matchByText } from "../services/matchByTextServices";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { useState } from "react";

interface ISearchresultsProps {
  isLoading: boolean;
}

export default function SearchResults(props: ISearchresultsProps) {
  const { searchData, setSearchData } = useOutletData();
  const [paginationNr, setPaginationNr] = useState<number>(0);

  const handleChange = async (
    e: DigiNavigationPaginationCustomEvent<number>
  ) => {
    if (searchData) {
      const newSearch = {
        input_text:
          searchData.identified_keywords_for_input.competencies.join(" "),
        offset: e.detail !== 1 ? e.detail * 10 - 1 : undefined,
      };

      const newResults = await matchByText(newSearch);

      setSearchData(newResults);
      setPaginationNr(e.detail);
    }
  };

  console.log(Math.ceil(searchData?.hits_total / 10));

  const competencies =
    searchData?.identified_keywords_for_input.competencies.map(
      (competency, i) => {
        return (
          <div key={i}>
            <DigiTag
              afText={competency}
              afSize={TagSize.SMALL}
              afNoIcon={true}
            ></DigiTag>
          </div>
        );
      }
    );
  if (props.isLoading) {
    return (
      <DigiLoaderSpinner afSize={LoaderSpinnerSize.MEDIUM}></DigiLoaderSpinner>
    );
  } else {
    if (searchData?.related_occupations.length === 0) {
      return (
        <p>
          Tyvärr hittade vi inga yrkestitlar baserade på din sökning, testa
          andra sökord
        </p>
      );
    } else {
      return (
        <section>
          <h4 className="keyWordsHeader">Sökningen baseras på följande ord:</h4>
          <div className="keyWords">{competencies}</div>
          <h3>Följande yrkestitlar matchar din sökning:</h3>
          {searchData?.related_occupations.map((occupation) => (
            <div key={occupation.id}>
              <DigiExpandableAccordion afHeading={occupation.occupation_label}>
                <ResultSummary occupation={occupation} />
              </DigiExpandableAccordion>
            </div>
          ))}
          <DigiNavigationPagination
            afTotalPages={
              searchData ? Math.floor(searchData.hits_total / 10) : 5
            }
            afInitActivePage={1}
            onAfOnPageChange={handleChange}
          ></DigiNavigationPagination>
        </section>
      );
    }
  }
}
