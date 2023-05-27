import { Main, PrivateMain } from 'src/pages';
import { AdminRouterPaths, PrivateRouterPaths, PublicRouterPaths, RouteItem } from '../types/router/paths';

export const publicRoutes: Record<PublicRouterPaths, RouteItem> = {
    [PublicRouterPaths.MAIN]: {
        path: PublicRouterPaths.MAIN,
        Element: Main,
    },
};

export const privateRoutes: Record<PrivateRouterPaths, RouteItem> = {
    [PrivateRouterPaths.PRIVATE_MAIN]: {
        path: PrivateRouterPaths.PRIVATE_MAIN,
        Element: PrivateMain,
    },
};

export const adminRoutes: Record<AdminRouterPaths, RouteItem> = {};