import { DigiInfoCard, DigiList } from "@digi/arbetsformedlingen-react";
import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  ListType,
} from "@digi/arbetsformedlingen";
import { ISearchResults } from "../models/ISearchResults";

interface ResultSummaryProps {
  data: ISearchResults;
}

export const ResultSummary = ({ data }: ResultSummaryProps) => {
  console.log(data);
  return (
    <>
      <DigiList afListType={ListType.BULLET}>
        <li>Jobbtitel 1</li>
        <li>Jobbtitel 2</li>
        <li>Jobbtitel 3</li>
      </DigiList>
      <DigiInfoCard
        afHeading="Jobbtitel"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.TIP}
        afLinkHref="Frivillig länk"
        afLinkText="Läs mer"
        afVariation={InfoCardVariation.PRIMARY}
        // afSize={infoCardSize.STANDARD}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          blanditiis odit a sit unde autem rerum, tenetur aliquid cupiditate?
        </p>
      </DigiInfoCard>
    </>
  );
};
