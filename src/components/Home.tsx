import { DigiButton, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";
import illustration from '/person.png'

export default function Home() {
  return (
    <DigiLayoutContainer>
      <section className="home">
        <div className='homeContent'>
          <h1>Välkommen till Yrkesvägledarn</h1>
          <p>Här kan du utforska olika utbildningar och se vilak yrkestitlar du kan axla efter din utbildning.</p>
          <DigiButton><Link to="sok-utbildning">Sök utbildning</Link></DigiButton>
          <DigiButton><Link to="sok-yrke">Utforska yrkestitlar</Link></DigiButton>
        </div>
        <img src={illustration} alt="illustration of woman in front of computer" />
      </section>
      </DigiLayoutContainer>
  );
}