import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { router } from "./components/router";
import { RouterProvider } from "react-router-dom";


export function App() {

  return (
    <>
      <DigiTypography>
        <RouterProvider router={router}></RouterProvider>
      </DigiTypography>
    </>
  );
}
export default App;
