import { DigiTypography } from "@digi/arbetsformedlingen-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export function App() {

  return (
    <>
    <DigiTypography>
      <Header />
      <Main />
      <Footer />
    </DigiTypography>
    </>
  );
}
export default App;
