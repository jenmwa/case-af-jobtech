import { IOccupation } from "../models/IOccupation";
import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  ListType,
} from "@digi/arbetsformedlingen";
import { DigiInfoCard, DigiList } from "@digi/arbetsformedlingen-react";
import { enrichedOccupation } from "../services/enrichedOccupationsServices";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";
import { useEffect, useState } from "react";

interface ResultSummaryProps {
  occupation: IOccupation;
}

interface ICompetency {
  term: string;
  percent_for_occupation: number;
}

export const ResultSummary = ({ occupation }: ResultSummaryProps) => {
  const [filteredTerms, setFilteredTerms] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const enrichedData: IEnrichedOccupation = {
        occupation_id: occupation.id,
        include_metadata: true,
      };

      const results = await enrichedOccupation(enrichedData);

      const competencies =
        results.metadata.enriched_candidates_term_frequency.competencies;

      const sortedCompetencies = competencies
        .filter((comp: ICompetency) => comp.percent_for_occupation > 1)
        .sort(
          (a: ICompetency, b: ICompetency) =>
            b.percent_for_occupation - a.percent_for_occupation
        );

      const top5Terms = sortedCompetencies
        .slice(0, 6)
        .map((comp: ICompetency) => comp.term);

      setFilteredTerms(top5Terms);
    };

    getData();
  }, [occupation]);

  return (
    <>
      <DigiInfoCard
        afHeading=""
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.TIP}
        afLinkHref="Frivillig länk"
        afLinkText="Läs mer"
        afVariation={InfoCardVariation.PRIMARY}
        // afSize={infoCardSize.STANDARD}
      >
        <p>
          Tillhör arbetsgruppen:
          {occupation.occupation_group.occupation_group_label}
        </p>
        <p>SSYK: {occupation.occupation_group.ssyk}</p>
        <p>Top 5 Kompetenser:</p>
        <DigiList afListType={ListType.BULLET}>
          {filteredTerms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </DigiList>
      </DigiInfoCard>
    </>
  );
};
