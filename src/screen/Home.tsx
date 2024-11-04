import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <h1>header</h1>
      <Header />
      <Outlet />
    </>
  );
}

export default Home;
