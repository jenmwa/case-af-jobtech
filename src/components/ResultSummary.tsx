import { IOccupation } from "../models/IOccupation";

import {
  LinkVariation,
  ListType,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLink,
  DigiList,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";
import { enrichedOccupation } from "../services/enrichedOccupationsServices";
import { StyledExpandInfo } from "./styled/Competencies";
import { StyledCompetenciesList } from "./styled/CompetenciesList";

interface ResultSummaryProps {
  occupation: IOccupation;
}

interface ICompetency {
  term: string;
  percent_for_occupation: number;
}

export const ResultSummary = ({ occupation }: ResultSummaryProps) => {
  const [topFive, setTopFive] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const enrichedData: IEnrichedOccupation = {
        occupation_id: occupation.id,
        include_metadata: true,
      };

      const results = await enrichedOccupation(enrichedData);

      const competencies =
        results.metadata.enriched_candidates_term_frequency.competencies;

      const topFive = competencies
        .slice(0, 5)
        .map((comp: ICompetency) => comp.term);
      setTopFive(topFive);
    };

    getData();
  }, [occupation]);

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <StyledExpandInfo>
          *Placeholder för sammanfattning av yrket* <br />
          Tillhör yrkesgrupp:{" "}
          {occupation.occupation_group.occupation_group_label}.
          <br />
          SSYK: {occupation.occupation_group.ssyk}
        </StyledExpandInfo>

        <h6>Topp 5 kompetenser:</h6>
        <DigiList afListType={ListType.BULLET}>
          <div></div>
          {topFive.map((term, index) => (
            <StyledCompetenciesList key={index} className="competence">
              {term}
            </StyledCompetenciesList>
          ))}
        </DigiList>
        <DigiLink
          afHref="/occupation/:id"
          af-target="_blank"
          afVariation={LinkVariation.SMALL}
          af-describedby="Läs mer här"
        >
          Läs mer
        </DigiLink>
      </DigiTypography>
    </>
  );
};

// javascript html css
