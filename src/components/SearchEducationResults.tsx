import {
  DigiExpandableAccordion,
  DigiLoaderSpinner,
  DigiMediaImage,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import EducationResultSummary from "./EducationResultSummary";
import illustration from "/coding.svg";
import "../style/_searchEducationResults.scss";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ISearchEducationParams } from "../models/ISearchEducationParams";
import { getEducations } from "../services/educationServices";
import { useState } from "react";

interface IEducationProps {
  showNoResult: boolean;
  searchEduData: IEducations | null;
  isLoading: boolean;
  setSerachEduData: (value: IEducations | null) => void;
  eduSearchHistory: ISearchEducationParams;
}

export default function SearchEducationResults({
  showNoResult,
  searchEduData,
  isLoading,
  setSerachEduData,
  eduSearchHistory,
}: IEducationProps) {
  const [totalPages, setTotalPages] = useState<number>(0);
  let accordionComponents: JSX.Element[] = [];

  if (searchEduData) {
    const titles = searchEduData.result.map((edu) => edu.education.title[0].content);
    accordionComponents = titles.map((title, index) => (

      <DigiExpandableAccordion key={index} afHeading={`${title}, ${searchEduData.result[index].providerSummary.providers[0]}`}>
        <EducationResultSummary
          id={searchEduData.result[index].education.identifier}
        />
      </DigiExpandableAccordion>
    ));
  }

  const eduPagination = async (e: DigiNavigationPaginationCustomEvent<number>) => {
    const newSearch = {
      query: eduSearchHistory.query,
      distance: eduSearchHistory.distance,
      education_form: eduSearchHistory.education_form,
      municipality_code: eduSearchHistory.municipality_code,
      offset: e.detail !== 1 ? e.detail * 10 - 10 : undefined,
    };

    const newResult = await getEducations(newSearch);

    if (newResult && searchEduData !== newResult) {
      setSerachEduData(newResult);
    }
  };

  if (searchEduData) {
    if (searchEduData.hits >= 100) {
      if (totalPages !== 100) setTotalPages(100);
    } else {
      const totalPagesCalc = Math.floor(searchEduData.hits / 10);
      if (totalPages !== totalPagesCalc) {
        setTotalPages(totalPagesCalc);
      }
    }
  }

  return (
    <>
      <section className="eduSearchResults">
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
            )}{" "}
            <section className="pagination-wrapper">
              <DigiNavigationPagination
                className="edu-pagination"
                afTotalPages={totalPages}
                afInitActivePage={1}
                onAfOnPageChange={eduPagination}
              ></DigiNavigationPagination>
            </section>
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
    </>
  );
}
