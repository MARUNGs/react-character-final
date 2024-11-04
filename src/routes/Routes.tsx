import { createBrowserRouter } from "react-router-dom";
import Home from "../screen/Home";
import Root from "../screen/Root";
import NotFound from "../screen/NotFound";
import ErrorComponent from "../screen/ErrorComponent";
import CommingSoon from "../screen/CommingSoon";
import NowPlaying from "../screen/NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "coming-soon",
        element: <CommingSoon />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
]);

export default router;
