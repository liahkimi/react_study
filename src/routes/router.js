import PageNotFound from "../pages/error/PageNotFound";
import Layout from "../pages/layout/Layout";
import MainPage from "../pages/main/MainPage";
import Mind from "../pages/mind/Mind";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout />,
        children : [
            {
                path: '/main',
                element : <MainPage />
            },
            {
                path: '/mind',
                element: <Mind/>
            }
        ]
    },
    {
        path: '*',
        element : <PageNotFound />
    }
])

export default router;