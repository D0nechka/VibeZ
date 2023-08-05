import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox, CheckboxSize } from './Checkbox';

describe('Checkbox', () => {
    test('Должен рендериться с правильным размером', () => {
        render(<Checkbox isChecked={false} size={CheckboxSize.S} onChange={() => {console.log('test');}} />);
        const checkbox = screen.getByRole('button');
        expect(checkbox).toHaveClass('s'); // Проверяем, что у кнопки есть класс "s"
    });

    test('Должен рендериться активным', () => {
        render(<Checkbox isChecked={true} onChange={() => {console.log('test');}} />);
        const checkbox = screen.getByRole('button');
        expect(checkbox).toHaveClass('active'); // Проверяем, что у кнопки есть класс "active"
    });

    test('Должен вызывать функцию onChange при клике', () => {
        const mockOnChange = jest.fn();
        render(<Checkbox isChecked={false} onChange={mockOnChange} />);
        const checkbox = screen.getByRole('button');
        fireEvent.click(checkbox);
        expect(mockOnChange).toHaveBeenCalledTimes(1); // Проверяем, что функция onChange была вызвана один раз
    });

    test('Должен быть неактивным, если disabled=true', () => {
        render(<Checkbox isChecked={false} disabled onChange={() => {console.log('test');}} />);
        const checkbox = screen.getByRole('button');
        expect(checkbox).toBeDisabled(); // Проверяем, что кнопка заблокирована
    });
});