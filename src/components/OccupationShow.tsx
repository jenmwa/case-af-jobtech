import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./SalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";
import { IDeficiencyValue } from "./Occupation";

interface IOccupationShowProps {
  occupationFound?: IOccupation;
  valuesAsArray: number[];
  keysAsArray: number[];
  handleReturnButton: () => void;
  deficiencyValue2023: IDeficiencyValue | undefined;
  deficiencyValue2026: IDeficiencyValue | undefined;
}

export const OccupationShow = ({
  occupationFound,
  valuesAsArray,
  keysAsArray,
  handleReturnButton,
  deficiencyValue2023,
  deficiencyValue2026,
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
      <OccupationForecast
        deficiencyValue2023={deficiencyValue2023}
        deficiencyValue2026={deficiencyValue2026}
      ></OccupationForecast>
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
