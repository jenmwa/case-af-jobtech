import { QuoteSingleVariation } from "@digi/arbetsformedlingen";
import { StyledDigiQuoteSingle } from "./styled/Quotes";

export const OccupationQuote = () => {
  return (
    <>
      <StyledDigiQuoteSingle
        afVariation={QuoteSingleVariation.PRIMARY}
        // afQuoteAuthorName="Okänd användare"
        afQuoteAuthorTitle="app-testare"
      >
        Som student använder jag appen Yrkesvägledararen för att utforska olika
        yrken och utbildningsalternativ baserat på mina intressen och
        favoritämnen. Appen hjälper mig att hitta karriärmöjligheter som matchar
        mina passioner och ger mig information om arbetsuppgifter, lönepotential
        och utbildningskrav för varje yrke. Jag kan även använda den för att
        söka efter relevanta utbildningar och kurser på olika institutioner.
        Sammantaget har Yrkesvägledararen varit en ovärderlig resurs för min
        karriärplanering.
      </StyledDigiQuoteSingle>
    </>
  );
};
