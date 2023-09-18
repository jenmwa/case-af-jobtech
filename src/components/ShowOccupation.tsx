import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconArrowBack,
  DigiIconCopy,
} from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import { IOccupation } from "../models/IOccupation";
import { getSCBStatisticsSalary } from "../services/getSCBStatisticsServices";
import { useEffect, useState } from "react";
import { SalaryStatistics } from "./SalaryStatistics";

interface IShowOccupationProps {
  occupationFound?: IOccupation;
}

export const ShowOccupation = ({ occupationFound }: IShowOccupationProps) => {
  const [keysAsArray, setKeysAsArray] = useState<string[]>([]);
  const [valuesAsArray, setValuesAsArray] = useState<number[]>([]);

  useEffect(() => {
    const ssyk = occupationFound?.occupation_group.ssyk;
    const getDataSCB = async () => {
      const test = await getSCBStatisticsSalary(ssyk);
      console.log(test);
      if (test) {
        const keysArray = test.map((item) => item.key[1]).flat();
        const valuesArray = test.map((item) => item.values).flat();
        console.log("Keys Array:", keysArray);
        console.log("Values Array:", valuesArray);

        const valuesArrayToNumbers = valuesArray.map((stringValue) => {
          return parseInt(stringValue);
        });
        console.log(valuesArrayToNumbers);

        setKeysAsArray(keysArray);
        setValuesAsArray(valuesArrayToNumbers);
      } else {
        console.log("no data found");
      }
    };
    if (keysAsArray.length === 0) {
      getDataSCB();
    }
  });

  // const handleClick = async () => {
  //   console.log("click");
  //   const test = await getSCBStatisticsSalary();
  //   console.log(test);
  //   if (test) {
  //     const keysArray = test.map((item) => item.key[1]).flat();
  //     const valuesArray = test.map((item) => item.values).flat();
  //     console.log("Keys Array:", keysArray);
  //     console.log("Values Array:", valuesArray);

  //     const valuesArrayToNumbers = valuesArray.map((stringValue) => {
  //       return parseInt(stringValue);
  //     });
  //     console.log(valuesArrayToNumbers);

  //     setKeysAsArray(keysArray);
  //     setValuesAsArray(valuesArrayToNumbers);
  //   } else {
  //     console.log("no data found");
  //   }
  // };

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
      {/* <DigiButton
        afSize={ButtonSize.SMALL}
        afVariation={ButtonVariation.SECONDARY}
        afFullWidth={false}
        onAfOnClick={handleClick}
      >
        <DigiIconCopy slot="icon" />
        Hämta SCB-data
      </DigiButton> */}
      <br></br>
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
