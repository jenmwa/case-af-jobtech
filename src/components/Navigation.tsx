import {
  NavigationSidebarHeadingLevel,
  NavigationSidebarPosition,
  NavigationSidebarVariation,
  NavigationVerticalMenuActiveIndicatorSize,
  NavigationVerticalMenuVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiNavigationSidebar,
  DigiNavigationVerticalMenu,
  DigiNavigationVerticalMenuItem,
} from "@digi/arbetsformedlingen-react";

interface INavigationProps {
  closeMenu: () => void;
}

export const Navigation = ({ closeMenu }: INavigationProps) => {
  return (
    <>
      <DigiNavigationSidebar
        className="menu-div"
        afActive={true}
        afStickyHeader={true}
        afBackdrop={true}
        afPosition={NavigationSidebarPosition.END}
        afVariation={NavigationSidebarVariation.OVER}
        afCloseButtonText="Stäng"
        afHeadingLevel={NavigationSidebarHeadingLevel.H2}
        onAfOnClose={closeMenu}
        onAfOnBackdropClick={closeMenu}
      >
        <DigiNavigationVerticalMenu
          afVariation={NavigationVerticalMenuVariation.PRIMARY}
          afActiveIndicatorSize={
            NavigationVerticalMenuActiveIndicatorSize.PRIMARY
          }
          afAriaLabel="text"
        >
          <ul>
            <li>
              <DigiNavigationVerticalMenuItem
                af-text="About"
                af-active-subnav="false"
              ></DigiNavigationVerticalMenuItem>
              <ul>
                <li>
                  <DigiNavigationVerticalMenuItem
                    afText="Undermenyval första nivå 1"
                    afActiveSubnav={false}
                  ></DigiNavigationVerticalMenuItem>
                  <ul>
                    <li>
                      <DigiNavigationVerticalMenuItem
                        afHref="/"
                        afText="Undermenyval andra nivå 1"
                      ></DigiNavigationVerticalMenuItem>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </DigiNavigationVerticalMenu>
      </DigiNavigationSidebar>
    </>
  );
};
