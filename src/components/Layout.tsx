import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};
