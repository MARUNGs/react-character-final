import { createBrowserRouter } from "react-router-dom";
import Popular from "../screen/Popular";
import Root from "../screen/Root";
import ComingSoon from "../screen/ComingSoon";
import NowPlaying from "../screen/NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
      {
        path: "movie/:movieId",
        element: <Popular />,
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        children: [
          {
            path: "movie/:movieId",
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        children: [
          {
            path: "movie/:movieId",
            element: <NowPlaying />,
          },
        ],
      },
    ],
  },
]);

export default router;
