import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import { IOccupation } from "../models/IOccupation";

interface IShowOccupationProps {
  occupationFound: IOccupation | undefined;
}

export const ShowOccupation = ({ occupationFound }: IShowOccupationProps) => {
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
