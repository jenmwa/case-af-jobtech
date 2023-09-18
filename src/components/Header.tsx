import { DigiButton } from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const ssyk = "2512";

  const testParams = () => {
    console.log("clicketi", ssyk);
    navigate("/occupation/" + ssyk);
  };

  return (
    <header>
      <h1>Header</h1>
      <DigiButton onAfOnClick={testParams}>Testa Params</DigiButton>
    </header>
  );
}
