import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { ResultSummary } from "./ResultSummary";

interface ISearchresultsProps {
  relatedOccupations: IOccupation[];
}

export default function SearchResults(props: ISearchresultsProps) {
  const occupationHtml = props.relatedOccupations.map((occupation) => (
    <div key={occupation.id}>
      <DigiExpandableAccordion afHeading={occupation.occupation_label}>
        <ResultSummary occupation={occupation}></ResultSummary>
      </DigiExpandableAccordion>
    </div>
  ));

  return <section>{occupationHtml}</section>;
}
