import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from 'src/shared/const/router';
import { NotFound } from 'src/pages';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { authUser, getUserId } from '../store/slices/user/UserSlice';
import { Spinner } from 'src/shared/ui';
import { useAsyncLoading } from '../hooks/useAsyncLoading';
import { checkAuthService } from '../services/checkAuth';
import { USER_ID_KEY } from 'src/shared/const/localStorage';

export const Router = () => {
    const isAdmin = false;
    const dispatch = useAppDispatch();

    const { isLoading, resultFunc, data, } = useAsyncLoading(checkAuthService);
    const id = useAppSelector(getUserId);

    useEffect(() => {
        resultFunc(localStorage.getItem(USER_ID_KEY) ?? '');
    }, []);

    useEffect(() => {
        if(typeof data !== 'string' && data) [
            dispatch(authUser(data))
        ];
    }, [ data ]);

    if(isLoading) {
        return <Spinner />;
    }

    return (
        <Suspense fallback="">
            <Routes>
                {id ? (
                    Object.values(privateRoutes).map(({ path, Element, }) => (
                        <Route key={path} path={path} element={<Element />} />
                    ))
                ) : (
                    Object.values(publicRoutes).map(({ path, Element, }) => (
                        <Route key={path} path={path} element={<Element />} />
                    ))
                )}
                {isAdmin && (
                    Object.values(adminRoutes).map(({ path, Element, }) => (
                        <Route key={path} path={path} element={<Element />} />
                    ))
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};