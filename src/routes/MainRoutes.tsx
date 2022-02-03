import { lazy } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Loadable from "../components/progressline/Loadable"
import MainLayout from '../layouts/MainLayout';

const Main = Loadable(lazy(() => import('../pages/MainPage')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));



const MainRoutes = () => ({
    path: '/',
    element:  <MainLayout/>,
    children: [
        {
            path: '/',
            element:  <Main/>
        },
        {
            path: '*',
            element:  <NotFound/>
        },
    ]
});



export default MainRoutes;
