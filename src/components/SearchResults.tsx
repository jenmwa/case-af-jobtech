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

  const occupationHtml = searchData?.map((occupation) => (
    <div key={occupation.id}>
      <DigiExpandableAccordion afHeading={occupation.occupation_label}>
        <ResultSummary occupation={occupation} />
      </DigiExpandableAccordion>
    </div>
  ));

  if (props.isLoading) {
    return (
      <DigiLoaderSpinner afSize={LoaderSpinnerSize.MEDIUM}></DigiLoaderSpinner>
    );
  } else {
    if (searchData === null) {
      return (
        <p>
          Tyvärr hittade vi inga yrkestitlar baserade på din sökning, testa
          andra sökord
        </p>
      );
    } else {
      return (
        <section>
          <h3>Följande yrken matchar din utbildning:</h3>
          {occupationHtml}
        </section>
      );
    }
  }
}
