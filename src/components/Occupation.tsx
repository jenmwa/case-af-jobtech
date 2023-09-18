import { useParams } from "react-router-dom";
import { ShowOccupation } from "./ShowOccupation";
import { useEffect, useState } from "react";

const ourList = [{ ssyk: "2512" }, { ssyk: "3919" }, { ssyk: "2515" }];

export const Occupation = () => {
  const [ourSSYK, setOurSSYK] = useState("");
  const { ssyk } = useParams<{ ssyk: string }>();
  const findSSYK = ourList.find((occupation) => occupation.ssyk === ssyk);
  console.log(findSSYK);

  return (
    <>
      about [yrke: {ourSSYK}]<ShowOccupation></ShowOccupation>
    </>
  );
};
