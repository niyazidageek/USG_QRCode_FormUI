import { useNavigate, useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import { useEffect } from 'react';


export default function ThemeRoutes() {
    return useRoutes([MainRoutes()]);
}
