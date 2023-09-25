// import { DigiUtilDetectClickOutside } from "@digi/arbetsformedlingen-react";
import { Link } from "react-router-dom";

// interface INavigationProps {
//   toggleMenu: () => void;
// }

export const Navigation = () => {
  // const click = () => {
  //   toggleMenu();
  // };

  return (
    <>
      {/* <DigiUtilDetectClickOutside onAfOnClickOutside={click}> */}
      <div className="menu-div">
        <ul className="navigation-items">
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/sok-yrke">Sök yrke</Link>
          </li>
          <li>
            <Link to="/sok-utbildning">Sök utbildning</Link>
          </li>
          <li>
            <Link to="/om">Om</Link>
          </li>
        </ul>
      </div>
      {/* </DigiUtilDetectClickOutside> */}
    </>
  );
};
