import {
  DigiExpandableAccordion,
  DigiLoaderSpinner,
} from "@digi/arbetsformedlingen-react";
import { ResultSummary } from "./ResultSummary";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { useOutletData } from "../context/useOutletData";

interface ISearchresultsProps {
  isLoading: boolean;
}

export default function SearchResults(props: ISearchresultsProps) {
  const { searchData } = useOutletData();
  console.log(searchData?.related_occupations, "här");
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
          <h2>Följande yrkestitlar matchar din sökning:</h2>
          {searchData?.related_occupations.map((occupation) => (
            <div key={occupation.id}>
              <DigiExpandableAccordion afHeading={occupation.occupation_label}>
                <ResultSummary occupation={occupation} />
              </DigiExpandableAccordion>
            </div>
          ))}
        </section>
      );
    }
  }
}
