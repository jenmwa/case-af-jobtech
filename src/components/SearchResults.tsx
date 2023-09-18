import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";

interface ISearchresultsProps {
  relatedOccupations: IOccupation[];
}


export default function SearchResults(props: ISearchresultsProps) {
  const occupationHtml = props.relatedOccupations.map((occupation) => 
    <div key={occupation.id}>
      <DigiExpandableAccordion
        afHeading={occupation.occupation_label}
      >
        <p>Här kommer komponenten som visar mer info om yrket</p>
      </DigiExpandableAccordion>
    </div>
  )

  return (
    <section>
      {occupationHtml}
    </section>
  );
}