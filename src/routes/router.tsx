import { createBrowserRouter } from "react-router-dom";
import { RedditClientApp } from "../RedditClientApp";
import { ErrorPage } from "../shared/pages/ErrorPage";
import { Layout } from "../ui/Layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RedditClientApp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/subreddits',
    element: <Layout />,
    errorElement: <ErrorPage />,
  }
]);
