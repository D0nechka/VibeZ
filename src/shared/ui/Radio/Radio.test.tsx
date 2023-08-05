import { render, fireEvent, screen } from '@testing-library/react';
import { Radio, RadioSize } from './Radio';

describe('Radio', () => {
    test('Должен рендериться с заданным размером и включенным состоянием', () => {
        const mockOnChange = jest.fn();
        render(<Radio size={RadioSize.S} isChecked onChange={mockOnChange} />);
        const radio = screen.getByTestId('radio');
        expect(radio).toBeInTheDocument(); // Проверяем, что радио-кнопка присутствует в документе
        expect(radio).toHaveClass('s'); // Проверяем, что у радио-кнопки есть класс "s"
        expect(radio).toHaveClass('active'); // Проверяем, что у радио-кнопки есть класс "active"
    });

    test('Должен вызывать функцию onChange при клике', () => {
        const mockOnChange = jest.fn();
        render(<Radio isChecked onChange={mockOnChange} />);
        const radio = screen.getByTestId('radio');
        fireEvent.click(radio);
        expect(mockOnChange).toHaveBeenCalledTimes(1); // Проверяем, что функция onChange была вызвана один раз
    });

    test('Должен быть неактивным, если disabled=true', () => {
        render(<Radio isChecked={false} disabled onChange={() => {console.log('test');}} />);
        const radio = screen.getByTestId('radio');
        expect(radio).toBeDisabled(); // Проверяем, что радио-кнопка заблокирована
    });
});