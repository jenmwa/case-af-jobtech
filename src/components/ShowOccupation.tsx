import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconArrowBack,
  DigiIconCopy,
} from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import { IOccupation } from "../models/IOccupation";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";

interface IShowOccupationProps {
  occupationFound: IOccupation | undefined;
}

export const ShowOccupation = ({ occupationFound }: IShowOccupationProps) => {
  const handleClick = async () => {
    console.log("click");
    const test = await getSCBStatisticsSalary();
    console.log(test);
  };

  const navigate = useNavigate();
  const handleReturnButton = () => {
    console.log("click");
    navigate("/");
  };
  return (
    <>
      {occupationFound ? (
        <div>
          <h2>yrke: {occupationFound.occupation_label}</h2>
        </div>
      ) : (
        <p>Inget yrke hittades</p>
      )}
      <DigiButton
        afSize={ButtonSize.SMALL}
        afVariation={ButtonVariation.SECONDARY}
        afFullWidth={false}
        onAfOnClick={handleClick}
      >
        <DigiIconCopy slot="icon" />
        Hämta SCT-data
      </DigiButton>
      <br></br>
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
