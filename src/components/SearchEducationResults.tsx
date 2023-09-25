import {
  DigiExpandableAccordion,
  DigiLoaderSpinner,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import EducationResultSummary from "./EducationResultSummary";
// import SearchResultsPlaceholder from "./SearchResultsPlaceholder";
import illustration from "/coding.svg";
import "../style/_searchEducationResults.scss";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";

interface IEducationProps {
  showNoResult: boolean;
  searchEduData: IEducations | null;
  isLoading: boolean;
}

export default function SearchEducationResults({
  showNoResult,
  searchEduData,
  isLoading,
}: IEducationProps) {
  let accordionComponents: JSX.Element[] = [];

  if (searchEduData) {
    const titles = searchEduData.result.map(
      (edu) => edu.education.title[0].content
    );
    accordionComponents = titles.map((title, index) => (
      <DigiExpandableAccordion key={index} afHeading={title}>
        <EducationResultSummary
          id={searchEduData.result[index].education.identifier}
        />
      </DigiExpandableAccordion>
    ));
  }

  return (
    <section>
      {isLoading ? (
        <DigiLoaderSpinner
          className="edu-loader"
          afSize={LoaderSpinnerSize.LARGE}
        ></DigiLoaderSpinner>
      ) : searchEduData ? (
        <>
          <h3>Utbildningar</h3>
          {showNoResult ? (
            <h3>Inga utbildningar hittades. Var vänlig sök på något annat.</h3>
          ) : (
            accordionComponents
          )}
        </>
      ) : (
        <DigiMediaImage
          className="search-edu-img"
          afUnlazy
          afHeight="300"
          afWidth="300"
          afSrc={illustration}
          afAlt="Illustration person framför datorn och hörlurar i öronen"
        />
      )}
    </section>
  );
}
