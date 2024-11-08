import { createBrowserRouter } from "react-router-dom";
import Root from "../screen/Root";
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
        path: "movie/:movieId",
        element: <Screen />,
      },
      {
        path: "coming-soon",
        element: <Screen />,
      },
      {
        path: "now-playing",
        element: <Screen />,
      },
    ],
  },
]);

export default router;
