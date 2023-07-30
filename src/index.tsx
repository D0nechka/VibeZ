import ReactDOM from 'react-dom/client';
import { App } from 'src/app/App';
import { Provider } from 'react-redux';
import ThemeProvider from 'src/shared/providers/ThemeProvider';
import NotificationProvider from './shared/providers/NotificationProvider';
import { store } from 'src/app/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <NotificationProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </NotificationProvider>
        </Provider>
    </BrowserRouter>
);