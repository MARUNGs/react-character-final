import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Screen from "../screen/Screen";
import Popular from "../screen/X_Popular";
import ComingSoon from "../screen/X_ComingSoon";
import NowPlaying from "../screen/X_NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Screen />,
        children: [
          {
            path: "movie/:movieId",
            element: <Screen />,
          },
        ],
      },
      {
        path: "coming-soon",
        element: <Screen />,
        children: [
          {
            path: "movie/:movieId",
            element: <Screen />,
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
