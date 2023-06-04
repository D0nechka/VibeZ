import { useTheme } from './hooks/useTheme';
import { Router } from './router/Router';
import { classNames } from 'src/shared/lib/classNames/classNames';
import './styles/style.scss';

export const App = () => {
    const { theme, } = useTheme();

    return(
        <div className={classNames('app', {} , [ theme ])}>
            <Router />
        </div>
    );
};