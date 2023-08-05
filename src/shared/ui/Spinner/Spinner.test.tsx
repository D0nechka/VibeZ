import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    test('Должен рендериться с заданным размером', () => {
        render(<Spinner size={50} />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toBeInTheDocument(); // Проверяем, что спиннер присутствует в документе
        expect(spinner)
            .toHaveStyle({ height: '50px', width: '50px', }); // Проверяем, что размер спиннера равен 50px x 50px
    });

    test('Должен иметь заданный класс', () => {
        render(<Spinner className="my-spinner" />);
        const spinner = screen.getByTestId('spinner');
        expect(spinner).toHaveClass('my-spinner'); // Проверяем, что у спиннера есть класс "my-spinner"
    });
});