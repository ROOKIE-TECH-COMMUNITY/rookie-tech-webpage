import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import SignIn from '../Pages/SignIn'

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
  {
    path: "/auth/signup",
    element: (
        <Layout>
          <div className=" grid place-items-center h-screen">
            <p>This is the sign up page</p>
          </div>
        </Layout>
    ),
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);
