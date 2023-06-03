import React from 'react';

export enum PublicRouterPaths {
    MAIN = '/'
}

export enum PrivateRouterPaths {
    PRIVATE_MAIN = '/',
}

export enum AdminRouterPaths {

}

export type RouteItem = {
    path: string,
    Element: React.FC
}