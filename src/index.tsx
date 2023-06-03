import ReactDOM from 'react-dom/client';
import { App } from 'src/app/App';
import { Provider } from 'react-redux';
import ThemeProvider from 'src/shared/providers/ThemeProvider';
import { store } from 'src/app/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);