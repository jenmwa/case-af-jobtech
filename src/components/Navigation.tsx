// import { DigiUtilDetectClickOutside } from "@digi/arbetsformedlingen-react";
import {
  NavigationSidebarPosition,
  NavigationSidebarVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiNavigationSidebar,
  DigiNavigationVerticalMenu,
} from "@digi/arbetsformedlingen-react";

interface INavigationProps {
  closeMenu: () => void;
}

export const Navigation = ({ closeMenu }: INavigationProps) => {
  return (
    <>
      {/* <div className="menu-div">
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
      </div> */}
      <DigiNavigationSidebar
        afActive={true}
        afStickyHeader={true}
        afBackdrop={true}
        afPosition={NavigationSidebarPosition.START}
        afVariation={NavigationSidebarVariation.OVER}
        afCloseButtonText="Stäng"
        onAfOnClose={closeMenu}
        onAfOnBackdropClick={closeMenu}
      >
        <DigiNavigationVerticalMenu>
          <li>1</li>
          <li>2</li>
        </DigiNavigationVerticalMenu>
      </DigiNavigationSidebar>
    </>
  );
};
