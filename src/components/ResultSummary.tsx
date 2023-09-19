import { IOccupation } from "../models/IOccupation";

import {
  ButtonSize,
  ButtonVariation,
  LinkVariation,
  ListType,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiLink,
  DigiList,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";
import { enrichedOccupation } from "../services/enrichedOccupationsServices";
import { StyledCompetenciesList } from "./styled/CompetenciesList";
import { getSsykDescription } from "../services/getSsykDescriptionServices";
import { ISSYKData } from "../models/ISsykData";

interface ResultSummaryProps {
  occupation: IOccupation;
}

interface ICompetency {
  term: string;
  percent_for_occupation: number;
}

export const ResultSummary = ({ occupation }: ResultSummaryProps) => {
  const [topFive, setTopFive] = useState<string[]>([]);
  const [matchingText, setMatchingText] = useState<string | null>(null);

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

    const getJobSummary = async () => {
      try {
        const response: ISSYKData = await getSsykDescription();
        const ssykToMatch = occupation.occupation_group.ssyk;

        const indexOfMatch = response.variables[0].values.findIndex(
          (value) => value === ssykToMatch
        );
        if (indexOfMatch !== -1) {
          const matchingText = response.variables[0].valueTexts[indexOfMatch];
          setMatchingText(matchingText);
        } else {
          console.log(`Matching SSYK Value: ${ssykToMatch} not found.`);
          setMatchingText(null);
        }
      } catch (error) {
        console.error("Error fetching SSYK data:", error);
        setMatchingText(null);
      }
    };

    getData();
    getJobSummary();
  }, [occupation]);

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h6>{matchingText && <p>Översikt: {matchingText}</p>}</h6>
        <p>
          Tillhör yrkesgrupp:{" "}
          {occupation.occupation_group.occupation_group_label}(SSYK:{" "}
          {occupation.occupation_group.ssyk})
        </p>

        <h6>Topp 5 kompetenser:</h6>
        <DigiList afListType={ListType.BULLET}>
          <div></div>
          {topFive.map((term, index) => (
            <StyledCompetenciesList key={index} className="competence">
              {term}
            </StyledCompetenciesList>
          ))}
        </DigiList>
        {/* <DigiLink
          afHref={`/yrke/${occupation.occupation_group.ssyk}`}
          af-target="_blank"
          afVariation={LinkVariation.SMALL}
          af-describedby="Läs mer här"
        >
          Läs mer
        </DigiLink> */}
        <DigiButton
          afSize={ButtonSize.SMALL}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
        >
          Läs mer
        </DigiButton>
      </DigiTypography>
    </>
  );
};

// html css javascript
