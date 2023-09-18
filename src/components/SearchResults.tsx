import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { ResultSummary } from "./ResultSummary";
// import { useState } from "react";

interface ISearchresultsProps {
  relatedOccupations: IOccupation[];
}

export default function SearchResults(props: ISearchresultsProps) {
  const occupationHtml = props.relatedOccupations.map((occupation) => (
    <div key={occupation.id}>
      <DigiExpandableAccordion afHeading={occupation.occupation_label}>
        <ResultSummary occupation={occupation} />
      </DigiExpandableAccordion>
    </div>
  ));

  return <section>{occupationHtml}</section>;
}
