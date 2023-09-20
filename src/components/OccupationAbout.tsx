import { ISSYKData } from "../models/ISsykData";

interface IOccupationAboutProps {
  ssykdata: ISSYKData;
}

export const OccupationAbout = ({ ssykdata }: IOccupationAboutProps) => {
  console.log(ssykdata);
  return (
    <>
      <h3>Yrkesbeskrivning{}</h3>
    </>
  );
};
