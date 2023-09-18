import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";

interface ISearchresultsProps {
  relatedOccupations: IOccupation[];
}


export default function SearchResults(props: ISearchresultsProps) {
  const occupationHtml = props.relatedOccupations.map((occupation) => 
    <DigiExpandableAccordion
      afHeading={occupation.occupation_label}
    >
      <p>Här kommer komponenten som visar mer info om yrket</p>
    </DigiExpandableAccordion>
  )

  return (
    <section>
      {occupationHtml}
    </section>
  );
}