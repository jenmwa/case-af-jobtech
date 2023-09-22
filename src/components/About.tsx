import { useNavigate } from "react-router-dom";

const testText = `Beskrivning: Kursen behandlar grundläggande begrepp inom webbutveckling.
CSS-ramverk används för att skapa responsiva webbsidor. Vidare behandlar
kursen programmering i front-end och back-end för att dynamiskt påverka
webbsidors innehåll.`;

export const About = () => {
  const navigate = useNavigate();
  const copyTextToLS = async () => {
    try {
      await navigator.clipboard.writeText(testText);
      localStorage.setItem("educationDescriptionText", testText);
    } catch (error) {
      console.log("Error:", error);
    }
    navigate("/");
  };
  return (
    <>
      About this page
      <p>{testText}</p>
      <button onClick={copyTextToLS}>SÖK RELATERADE YRKEN</button>
    </>
  );
};
