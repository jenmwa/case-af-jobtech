import { TagSize } from "@digi/arbetsformedlingen";
import { DigiTag } from "@digi/arbetsformedlingen-react";

export const CompetenciesTags = () => {
  return (
    <>
      <DigiTag
        afText="Jag är en tagg"
        afSize={TagSize.SMALL}
        afNoIcon={false}
        afAriaLabel="ta bort"
      ></DigiTag>
    </>
  );
};

// html javascript css
