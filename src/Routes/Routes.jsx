import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewRecipe from "../Components/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "blog",
                element: <Blogs></Blogs>
            },
            {
                path: "recipes/:_id",
                element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-nikkon1998-gmailcom.vercel.app/chef/${params._id}`)
            },
            {
                path: '*',
                element: <PageNotFound />
            }
        ]
    },
]);

export default router;