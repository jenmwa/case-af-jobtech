import { DigiButton } from "@digi/arbetsformedlingen-react";
import { ButtonVariation } from "@digi/arbetsformedlingen";

export function App() {
  function myFunction(e: any) {
    console.log(e);
  }

  return (
    <DigiButton onAfOnClick={myFunction} afVariation={ButtonVariation.PRIMARY}>
      Skicka
    </DigiButton>
  );
}
export default App;
