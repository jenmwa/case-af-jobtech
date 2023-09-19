import { DigiExpandableAccordion, DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";

interface ISearchresultsProps {
  relatedOccupations: IOccupation[];
  isLoading: boolean;
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

if(props.isLoading){
    return <DigiLoaderSpinner 
    afSize={LoaderSpinnerSize.MEDIUM}>
    </DigiLoaderSpinner>
  } else {
    if(occupationHtml.length === 0){
      return <p>Tyvärr hittade vi inga yrkestitlar baserade på din sökning, testa andra sökord</p>
    } else{
      return (
      <section>
        <h3>Följande yrken matchar din utbildning:</h3>
        {occupationHtml}
      </section>
      )
    }
  }
}


