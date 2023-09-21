import { ISSYKData } from "../models/ISsykData";

export const useSSYKDetails = (ssyk: string, ssykdata: ISSYKData) => {
  console.log(ssyk, ssykdata);
  if (!ssyk || !ssykdata) {
    console.log("Value not found in the list");
    return;
  }

  const ssykDetailsList = ssykdata.variables[0].values;
  const index = ssykDetailsList.indexOf(ssyk);
  console.log(index);
  if (index !== -1) {
    console.log("Index found:", index);
    const findIndexText = ssykdata.variables[0].valueTexts[index];
    console.log(findIndexText);
    return findIndexText;
  } else {
    console.log("Value not found in the list");
  }
};
