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
        <h2>Utbildningar</h2>
        {showNoResult ? <h4>No result found</h4> : accordionComponents}
      </section>
    </>
  );
}
