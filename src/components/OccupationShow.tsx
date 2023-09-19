import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./SalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";

interface IOccupationShowProps {
  occupationFound?: IOccupation;
  valuesAsArray: number[];
  keysAsArray: number[];
  handleReturnButton: () => void;
}

export const OccupationShow = ({
  occupationFound,
  valuesAsArray,
  keysAsArray,
  handleReturnButton,
}: IOccupationShowProps) => {
  return (
    <>
      {occupationFound ? (
        <div>
          <h2>yrke: {occupationFound.occupation_label}</h2>
        </div>
      ) : (
        <p>Inget yrke hittades</p>
      )}
      <br></br>
      <OccupationAbout></OccupationAbout>
      <OccupationCompetences></OccupationCompetences>
      <OccupationForecast></OccupationForecast>
      <SalaryStatistics
        keysAsArray={keysAsArray}
        valuesAsArray={valuesAsArray}
      ></SalaryStatistics>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.FUNCTION}
        afFullWidth={false}
        onAfOnClick={handleReturnButton}
      >
        <DigiIconArrowBack slot="icon" />
        Tillbaka till Sökresultat
      </DigiButton>
    </>
  );
};
