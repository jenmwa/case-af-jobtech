import { IOccupation } from "../models/IOccupation";
import { LinkVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLink, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";
import { enrichedOccupation } from "../services/enrichedOccupationsServices";

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
        .slice(0, 6)
        .map((comp: ICompetency) => comp.term);
      setTopFive(topFive);
    };

    getData();
  }, [occupation]);

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <p>
          Tillhör yrkesgrupp:{" "}
          {occupation.occupation_group.occupation_group_label}
        </p>
        <p>SSYK: {occupation.occupation_group.ssyk}</p>
        <h6>Topp 5 kompetenser:</h6>
        <ul>
          {topFive.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
        <DigiLink afHref="/Occupation" afVariation={LinkVariation.SMALL}>
          Läs mer
        </DigiLink>
      </DigiTypography>
    </>
  );
};

// javascript html css
