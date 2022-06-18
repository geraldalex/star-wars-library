import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavofitePage from "@containers/FavofitePage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from "@components/ErrorMessage"

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/favorits',
        element: <FavofitePage />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/fail',
        
        element: <ErrorMessage />
    },
    {
        path: '/not-found',
        
        element: <NotFoundPage />
    },
    {
        path: '*',
        
        element: <NotFoundPage />
    },
]

export default routesConfig