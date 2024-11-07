import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/RootStyled";
import "../css/index.css";

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
