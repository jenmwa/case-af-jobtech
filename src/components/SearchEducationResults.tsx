import {
  DigiExpandableAccordion,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import illustration from "/illustration-person-computer-phone.svg";
import "../style/_searchEducationResults.scss";

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
          <DigiMediaImage
            className="search-edu-img"
            afUnlazy
            afHeight="300"
            afWidth="300"
            afSrc={illustration}
            afAlt="Illustration person framför datorn med mobilen i handen och hörlurar i öronen"
          ></DigiMediaImage>
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
