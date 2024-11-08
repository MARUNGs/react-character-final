import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Screen from "../screen/Screen";

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
        element: <Screen />,
        children: [
          {
            path: "movie/:movieId",
            element: <Screen />,
          },
        ],
      },
    ],
  },
]);

export default router;
