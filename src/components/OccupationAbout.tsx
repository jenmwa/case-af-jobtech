interface IOccupationAboutProps {
  findIndexText: string;
}

export const OccupationAbout = ({ findIndexText }: IOccupationAboutProps) => {
  console.log(findIndexText);
  return (
    <>
      <h3>Yrkesbeskrivning{}</h3>
      <p>{findIndexText}</p>
    </>
  );
};
