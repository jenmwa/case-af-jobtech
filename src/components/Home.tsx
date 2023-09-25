import {
  DigiButton,
  DigiLayoutContainer,
  DigiMediaFigure,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";
import illustration from "/winners.svg";

export default function Home() {
  return (
    <DigiLayoutContainer>
      <section className="home">
        <div className="homeContent">
          <h1>Välkommen till Yrkesvägledarn</h1>
          <p>
            Här kan du utforska olika utbildningar och se vilka yrkestitlar du
            kan axla efter din utbildning.
          </p>
          <DigiButton>
            <Link to="sok-utbildning">Sök utbildning</Link>
          </DigiButton>
          <DigiButton>
            <Link to="sok-yrke">Utforska yrkestitlar</Link>
          </DigiButton>
        </div>
        <DigiMediaFigure className="img-container">
          <DigiMediaImage
            className="img"
            afUnlazy
            afHeight="375"
            afWidth="375"
            afSrc={illustration}
            afAlt="Illustration av två personer som är glada och håller händerna i luften"
          ></DigiMediaImage>
        </DigiMediaFigure>
      </section>
    </DigiLayoutContainer>
  );
}
