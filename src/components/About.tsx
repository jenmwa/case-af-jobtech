import { LayoutBlockVariation, LinkVariation } from "@digi/arbetsformedlingen";
import {
  DigiIconExternalLinkAlt,
  DigiLayoutBlock,
  DigiLink,
  DigiMediaImage,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";

export const About = () => {
  return (
    <>
      <MainFlex>
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
          <DigiTypography>
            <h2>Om denna app</h2>
            <p>
              Som en del av kursen Javascript-Fördjupning MedieInstitutet 2023
              fick vi i uppgift att Bygga applikationer på Arbetsförmedlingens
              öppna data [ https://jobtechdev.se ]för studenter.
            </p>
            <p>
              Detta genom ramverket React där uppgiften var att matcha fram
              relaterade yrken utifrån utbildningstitel och
              utbildningsbeskrivning.
            </p>
            <p>
              {" "}
              Uppgiften bestod av att hämta data på ett strukturerat sätt med
              hjälp av antingen fetch eller axios, och även skapa tjänster
              (services) som vi använder oss av för att hämta data. Vi skulle
              även använda oss av de React-koncept vi lärt oss under kursens
              gång (context, state, routing mm) och även använda oss av
              Arbetsförmedlingens Designsystem.
            </p>
            <p>
              {" "}
              Vårt grupparbete utmynnade i denna app, Yrkesvägledaren, där du
              som användare dels kan söka passande yrken av det du är
              intresserad av, genom att skriva nyckelord såsom ämnen,
              alternativt kursbeskrivningar.Du kan också söka utbildningar
              gällande det du gillar, och därifrån gå vidare för att få mer info
              gällande yrken.Du får både kort beskrivning, lite framtidsprognos
              samt löneutveckling de senaste 5åren. Vi har utöver jobtechs öppna
              data, även använt statistik från SCB’s öppna data.
            </p>
            <p>
              Vi som gjort denna app går i klassen FED22d och ni hittar oss på
              följande Github-repon:
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>
                <DigiLink
                  afHref="https://github.com/nanidam"
                  afTarget="_blank"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Nani Dam
                </DigiLink>
              </li>
              <li>
                <DigiLink
                  afHref="https://github.com/evelinanorlin"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Evelina Norlin
                </DigiLink>
              </li>
              <li>
                <DigiLink
                  afHref="https://github.com/jenmwa"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Jenny Waller
                </DigiLink>
              </li>
            </ul>

            <span> © all right reserved, Yrkestipsarna 2023 </span>
          </DigiTypography>
        </DigiLayoutBlock>
        <DigiMediaImage
          afUnlazy
          afHeight="300"
          afWidth="300"
          afSrc="/blooming.svg"
          afAlt="Illustration där en person sitter på amrken med 3 blommor"
        ></DigiMediaImage>
      </MainFlex>
    </>
  );
};
