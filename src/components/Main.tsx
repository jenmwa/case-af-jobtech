import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";

export default function Main() {
  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm />
          <SearchResults />
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}