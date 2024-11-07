import { createBrowserRouter } from "react-router-dom";
import Popular from "../screen/Popular";
import Root from "../screen/Root";
import NotFound from "../screen/NotFound";
import ErrorComponent from "../screen/ErrorComponent";
import ComingSoon from "../screen/ComingSoon";
import NowPlaying from "../screen/NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Popular />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "movie/:movieId",
        element: <Popular />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "movie/:movieId",
            element: <ComingSoon />,
            errorElement: <ErrorComponent />,
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "movie/:movieId",
            element: <NowPlaying />,
            errorElement: <ErrorComponent />,
          },
        ],
      },
    ],
  },
]);

export default router;
