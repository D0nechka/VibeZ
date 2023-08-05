import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
    test('Должен рендериться с заданным текстом', () => {
        render(<Logo text="Мой логотип" />);
        const logo = screen.getByText('Мой логотип');
        expect(logo).toBeInTheDocument(); // Проверяем, что логотип с заданным текстом присутствует в документе
    });

    test('Должен рендериться с текстом по умолчанию, если text не задан', () => {
        render(<Logo />);
        const defaultText = screen.getByText('</> | VIBEZ');
        expect(defaultText)
            .toBeInTheDocument(); // Проверяем, что логотип с текстом по умолчанию присутствует в документе
    });

    test('Должен применять заданный класс', () => {
        render(<Logo className="my-logo" />);
        const logo = screen.getByTestId('logo');
        expect(logo).toHaveClass('my-logo'); // Проверяем, что у логотипа есть класс "my-logo"
    });
});