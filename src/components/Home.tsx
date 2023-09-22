import { DigiButton, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <DigiLayoutContainer>
        <h1>Välkommen till Yrkesvägledarn</h1>
        <p>Här kan du utforska olika utbildningar och se yrkestitlar du kan axla med efter din utbildning</p>
        <DigiButton><Link to="sok-utbildning">Sök utbildning</Link></DigiButton>
        <DigiButton><Link to="sok-yrke">Utforska yrkestitlar</Link></DigiButton>
      </DigiLayoutContainer>
    </section>
  );
}