import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./OccupationSalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";
// import { IDeficiencyValue } from "./Occupation";

interface IOccupationShowProps {
  occupationFound?: IOccupation;
  findIndexText: string;
  chartLineYValues: number[];
  chartLineXValues: string[];
  handleReturnButton: () => void;
  deficiencyValueData2023: { value: string; text: string };
  deficiencyValueData2026: { value: string; text: string };
}

export const OccupationShow = ({
  occupationFound,
  findIndexText,
  chartLineYValues,
  chartLineXValues,
  handleReturnButton,
  deficiencyValueData2023,
  deficiencyValueData2026,
}: IOccupationShowProps) => {
  return (
    <>
      {occupationFound ? (
        <div>
          <h2>{occupationFound.occupation_label}</h2>
          <p>
            <span style={{ fontWeight: "bold" }}>
              {occupationFound.occupation_group.occupation_group_label}
            </span>{" "}
            (SSYK: {occupationFound.occupation_group.ssyk})
          </p>
        </div>
      ) : (
        <p>Inget yrke hittades</p>
      )}
      <br></br>
      <OccupationAbout findIndexText={findIndexText}></OccupationAbout>
      <OccupationCompetences></OccupationCompetences>
      <OccupationForecast
        deficiencyValueData2023={deficiencyValueData2023}
        deficiencyValueData2026={deficiencyValueData2026}
        occupationFound={occupationFound}
      ></OccupationForecast>
      <SalaryStatistics
        chartLineXValues={chartLineXValues}
        chartLineYValues={chartLineYValues}
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
