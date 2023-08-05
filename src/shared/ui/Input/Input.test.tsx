import { render, fireEvent, screen } from '@testing-library/react';
import { Input, InputSize } from './Input';

describe('Input', () => {
    test('Должен рендериться с правильными размером и меткой', () => {
        render(<label><Input labelText="Имя пользователя" size={InputSize.S} /></label>);
        const input = screen.getByLabelText('Имя пользователя'); // Поиск по атрибуту "aria-label"
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass('s'); // Проверяем, что у input есть класс "s"
    });

    test('Должен вызывать функцию onChange при изменении значения', () => {
        const mockOnChange = jest.fn();
        render(<Input onChange={mockOnChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New value', }, });
        expect(mockOnChange).toHaveBeenCalledTimes(1); // Проверяем, что функция onChange была вызвана один раз
        expect(mockOnChange)
            .toHaveBeenCalledWith('New value'); // Проверяем, что функция вызывалась с правильным значением
    });

    test('Должен скрывать и показывать пароль при клике на иконку', () => {
        render(<label><Input labelText='Password' isPassword /></label>); // Обернем Input в label
        const input = screen.getByLabelText('Password');
        const toggleButton = screen.getByRole('button');

        // По умолчанию пароль должен быть скрыт
        expect(input).toHaveAttribute('type', 'password');

        // Кликаем на иконку для показа пароля
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'text');

        // Кликаем на иконку для скрытия пароля
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'password');
    });
});