import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import { DigiButton, DigiIconArrowBack } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import { IOccupation } from "../models/IOccupation";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { useEffect, useState } from "react";
import { SalaryStatistics } from "./SalaryStatistics";

interface IShowOccupationProps {
  occupationFound?: IOccupation;
}

export const ShowOccupation = ({ occupationFound }: IShowOccupationProps) => {
  const [keysAsArray, setKeysAsArray] = useState<number[]>([]);
  const [valuesAsArray, setValuesAsArray] = useState<number[]>([]);

  //OBS lägg in felhantering, om value=== ".." , ta föregående
  useEffect(() => {
    if (occupationFound) {
      const ssyk = occupationFound.occupation_group.ssyk;
      const getDataSCB = async () => {
        const test = await getSCBStatisticsSalary(ssyk);
        console.log(test);
        if (test) {
          const keysArray = test.map((item) => item.key[1]).flat();
          const valuesArray = test.map((item) => item.values).flat();
          console.log("Keys Array:", keysArray);
          console.log("Values Array:", valuesArray);

          const keysArrayToNumbers = keysArray.map((stringValue) => {
            return parseInt(stringValue);
          });
          console.log(keysArrayToNumbers);

          const valuesArrayToNumbers = valuesArray.map((stringValue) => {
            return parseInt(stringValue);
          });
          console.log(valuesArrayToNumbers);

          setKeysAsArray(keysArrayToNumbers);
          setValuesAsArray(valuesArrayToNumbers);
        } else {
          console.log("no data found");
        }
      };
      if (keysAsArray.length === 0) {
        getDataSCB();
      }
    }
  });

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
      <br></br>
      <p>Om yrket</p>
      <p>Vanligaste kompetenserna</p>
      <p>Framtidsprognos</p>
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
