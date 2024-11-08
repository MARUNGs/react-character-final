import { createBrowserRouter } from "react-router-dom";
import Popular from "../screen/X_Popular";
import Root from "../Root";
import ComingSoon from "../screen/X_ComingSoon";
import NowPlaying from "../screen/X_NowPlaying";
import Screen from "../screen/Screen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Screen />,
      },
      {
        path: "/movie/:movieId",
        element: <Screen />,
      },
      {
        path: "coming-soon",
        element: <Screen />,
        // children: [
        //   {
        //     path: "movie/:movieId",
        //     element: <Screen />,
        //   },
        // ],
      },
      {
        path: "now-playing",
        element: <Screen />,
        // children: [
        //   {
        //     path: "movie/:movieId",
        //     element: <Screen />,
        //   },
        // ],
      },
    ],
  },
]);

export default router;
