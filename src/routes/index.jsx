import Home from "../components/Home"
import NotFound from "../components/NotFound"
import Refetch from "../components/Refetch";

const routes =  [
    {
        path: "/",
        element: <Home />
    }, {
        path: "/refetch",
        element: <Refetch />
    }, {
        path: "*",
        element: <NotFound />
    }
]

export default routes;
