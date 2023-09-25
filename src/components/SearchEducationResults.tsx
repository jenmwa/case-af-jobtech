import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import EducationResultSummary from "./EducationResultSummary";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";

interface IEducationProps {
  showNoResult: boolean;
  searchEduData: IEducations | null;
}

export default function SearchEducationResults({
  showNoResult,
  searchEduData,
}: IEducationProps) {
  let accordionComponents: JSX.Element[] = [];

  if(searchEduData){
    const titles = searchEduData.result.map((edu) => edu.education.title[0].content);
    accordionComponents = titles.map((title, index) => (
      <DigiExpandableAccordion key={index} afHeading={title}>
        <EducationResultSummary id={searchEduData.result[index].education.identifier} />
      </DigiExpandableAccordion>
    ));
  }

  if(searchEduData){
    return (
      <section>
        <h3>Utbildningar</h3>
         {showNoResult ? (
            <h3>
              Inga utbildningar hittades. Var vänlig sök på något annat.
            </h3>
          ) : (
            accordionComponents
          )}
      </section>
    )
  } else {
    return (
      <section>
        <SearchResultsPlaceholder />
      </section>
    )
  }
}
