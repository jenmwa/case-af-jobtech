import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createContext, useState } from "react";
import { IOccupation1 } from "../models/IOccupation";

interface OutletContextProps {
  searchData: IOccupation1 | null;
  setSearchData: React.Dispatch<React.SetStateAction<IOccupation1 | null>>;
}

export const OutletContext = createContext<OutletContextProps | undefined>(
  undefined
);

export const Layout = () => {
  const [searchData, setSearchData] = useState<IOccupation1 | null>(null);

  return (
    <>
      <Header></Header>
      <main>
        <OutletContext.Provider value={{ searchData, setSearchData }}>
          <Outlet></Outlet>
        </OutletContext.Provider>
      </main>
      <Footer></Footer>
    </>
  );
};
