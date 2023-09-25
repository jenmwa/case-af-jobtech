import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import EducationResultSummary from "./EducationResultSummary";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";

interface IEducationProps {
  eduResult: IEducations;
  showNoResult: boolean;
  searched: boolean;
}

export default function SearchEducationResults({
  eduResult,
  showNoResult,
  searched,
}: IEducationProps) {
  //console.log('I sökresultat',eduResult.result[0].education.identifier);
  const titles = eduResult.result.map((edu) => edu.education.title[0].content);
  const accordionComponents = titles.map((title, index) => (
    <DigiExpandableAccordion key={index} afHeading={title}>
      <EducationResultSummary id={eduResult.result[index].education.identifier} />
    </DigiExpandableAccordion>
  ));

  return (
    <>
      <section>
        {!searched ? (
          <SearchResultsPlaceholder />
        ) : (
          <>
            {" "}
            <h3>Utbildningar</h3>
            {showNoResult ? (
              <h3>
                Inga utbildningar hittades. Var vänlig sök på något annat.
              </h3>
            ) : (
              accordionComponents
            )}
          </>
        )}
      </section>
    </>
  );
}
