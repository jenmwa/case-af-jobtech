import {
  DigiMediaImage,
  DigiNavigationSidebarButton,
  DigiUtilDetectClickOutside,
} from "@digi/arbetsformedlingen-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo-02.svg";
import { Navigation } from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("toggle menu isOpen", isOpen);
  };

  return (
    <DigiUtilDetectClickOutside onAfOnClickOutside={toggleMenu}>
      <header className="nav">
        <div className="headerFlex">
          <DigiMediaImage
            afUnlazy
            afHeight="100"
            afWidth="100"
            afSrc={logo}
            afAlt="Illustratino föreställande en man och en kvinna framför en dator"
          ></DigiMediaImage>
          <div className="navigation">
            <Link to="/">Hem</Link>
            <Link to="/sok-yrke">Sök yrke</Link>
            <Link to="/sok-utbildning">Sök utbildning</Link>
            <Link to="/om">Om</Link>
          </div>
          <DigiNavigationSidebarButton
            onAfOnToggle={toggleMenu}
            afText="Meny"
          ></DigiNavigationSidebarButton>
          {isOpen ? <Navigation></Navigation> : ""}
        </div>
      </header>
    </DigiUtilDetectClickOutside>
  );
}
