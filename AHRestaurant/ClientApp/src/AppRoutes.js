import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Route, Switch } from 'react-router-dom';
import { Contact } from "./Views/Contact";
import { About } from "./Views/About";
import { Home } from "./Views/Home";
import { Order } from "./Views/Order";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/About',
        requireAuth: false,
        element: <About />
    },
    {
        path: '/Order',
        requireAuth: false,
        element: <Order />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
