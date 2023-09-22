import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";

interface IEducationProps {
  eduResult: IEducations;
  showNoResult: boolean;
}

export default function SearchEducationResults({
  eduResult,
  showNoResult,
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
        {showNoResult ? (
          <h3>Inga utbildningar hittades. Var vänlig sök på något annat.</h3>
        ) : (
          <>
            <h2>Utbildningar</h2>
            {accordionComponents}
          </>
        )}
      </section>
    </>
  );
}
