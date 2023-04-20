import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about-us",
    element: (
      <Layout>
        <div className=" grid place-items-center h-screen">
          <p>We are currently working on this page</p>
        </div>
      </Layout>
    ),
  },
  {
    path: "our-website",
    element: (
      <Layout>
        <div className=" grid place-items-center h-screen">
          <p>We are currently working on this page</p>
        </div>
      </Layout>
    ),
  },
  {
    path: "contact-us",
    element: (
      <Layout>
        <div className=" grid place-items-center h-screen">
          <p>We are currently working on this page</p>
        </div>
      </Layout>
    ),
  },
]);
