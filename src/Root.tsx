import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/RootStyled";
import "./css/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default Root;
