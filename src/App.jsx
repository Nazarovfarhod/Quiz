//rrd imports
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
//layout
import MainLayout from "./layout/MainLayout";
//pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quizz/:title",
          element: <Quizz />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
