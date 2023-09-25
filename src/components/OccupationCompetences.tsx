import { useContext } from "react";
import { IOccupation } from "../models/IOccupation";
import { EnrichedOccupationContext } from "../context/EnrichedOccupationContext";
import { DigiTag } from "@digi/arbetsformedlingen-react";
import { TagSize } from "@digi/arbetsformedlingen";
import "../style/_occupationCompetences.scss";

interface IOccupationShowProps {
  occupationFound: IOccupation;
}

export const OccupationCompetences = (
  occupationFound: IOccupationShowProps
) => {
  const enrichedOccupationData = useContext(EnrichedOccupationContext);

  const matchingMetadata = enrichedOccupationData.stateEnrichedOccupation.find(
    (item) => item.id === occupationFound.occupationFound.id
  );

  const competencies =
    matchingMetadata?.metadata?.enriched_candidates_term_frequency
      .competencies || [];
  const topCompetencies = competencies.slice(0, 15);
  console.log(topCompetencies);

  return (
    <>
      <h4>Vanligaste kompetenserna</h4>
      <section className="competence-wrapper">
        {topCompetencies.length > 0 ? (
          topCompetencies.map((competency, index) => (
            <DigiTag
              className="competence-tag"
              key={index}
              afText={competency.term}
              afSize={TagSize.SMALL}
              afNoIcon={true}
            ></DigiTag>
          ))
        ) : (
          <p>No matching competencies found</p>
        )}
      </section>
    </>
  );
};

// html css node
