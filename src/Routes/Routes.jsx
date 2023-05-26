import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import SignIn from '../Pages/SignIn'
import SignUp from '../pages/SignUp'

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
    element: <SignUp />
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);
