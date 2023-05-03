import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import Blogs from "../Components/Blogs/Blogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ViewRecipe from "../Components/ViewRecipe/ViewRecipe";
import PrivateRoute from "./PrivateRoute";

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
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params._id}`)
            }
        ]
    },
]);

export default router;