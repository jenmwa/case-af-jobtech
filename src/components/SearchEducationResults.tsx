import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import { EnrichedOccupationContext } from "../context/EnrichedOccupationContext";
import { useContext } from "react";

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
  const titles = eduResult.result.map((edu) => edu.education.title[0].content);
  const accordionComponents = titles.map((title, index) => (
    <DigiExpandableAccordion key={index} afHeading={title}>
      <p>Ea nulla enim enim voluptate mollit proident.</p>
    </DigiExpandableAccordion>
  ));

  return (
    <>
      <section>
        {!searched ? (
          <h3>placeholder</h3>
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
