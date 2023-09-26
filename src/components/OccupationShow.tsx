import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconArrowBack,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./OccupationSalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";
import { MainFlex50percent } from "../style/Wrappers";
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
  console.log(chartLineXValues, chartLineYValues);
  return (
    <>
      <DigiLayoutContainer>
        <MainFlex50percent>
          <DigiLayoutContainer>
            {occupationFound ? (
              <DigiLayoutContainer af-no-gutter af-vertical-padding>
                <h2>{occupationFound.occupation_label}</h2>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {occupationFound.occupation_group.occupation_group_label}
                  </span>{" "}
                  (SSYK: {occupationFound.occupation_group.ssyk})
                </p>
              </DigiLayoutContainer>
            ) : (
              <p>Inget yrke hittades</p>
            )}
            <OccupationAbout findIndexText={findIndexText}></OccupationAbout>
            {occupationFound && (
              <OccupationCompetences
                occupationFound={occupationFound}
              ></OccupationCompetences>
            )}

            <OccupationForecast
              deficiencyValueData2023={deficiencyValueData2023}
              deficiencyValueData2026={deficiencyValueData2026}
              occupationFound={occupationFound}
            ></OccupationForecast>
          </DigiLayoutContainer>
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
        </MainFlex50percent>
      </DigiLayoutContainer>
    </>
  );
};
