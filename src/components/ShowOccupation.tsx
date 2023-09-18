import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";

export const ShowOccupation = () => {
  return (
    <>
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.FUNCTION}
        afFullWidth={false}
      >
        <DigiIconArrowBack slot="icon" />
        Tillbaka till Sökresultat
      </DigiButton>
    </>
  );
};
