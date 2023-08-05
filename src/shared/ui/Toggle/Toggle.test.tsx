import { render, fireEvent, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
    test('Должен рендериться с заданным состоянием и вызывать функцию при клике', () => {
        const mockChangeActive = jest.fn();
        render(<Toggle isActive={false} changeActive={mockChangeActive} />);
        const toggle = screen.getByRole('button');
        expect(toggle).toBeInTheDocument(); // Проверяем, что переключатель присутствует в документе
        expect(toggle).toHaveClass('m'); // Проверяем, что у переключателя есть класс "m"
        expect(toggle).not.toHaveClass('active'); // Проверяем, что у переключателя нет класса "active"

        fireEvent.click(toggle);
        expect(mockChangeActive).toHaveBeenCalledTimes(1); // Проверяем, что функция changeActive была вызвана один раз
    });

    test('Должен рендериться с заданным состоянием и классом', () => {
        render(<Toggle isActive className="my-toggle" changeActive={() => {console.log('test');}} />);
        const toggle = screen.getByRole('button');
        expect(toggle).toHaveClass('my-toggle'); // Проверяем, что у переключателя есть класс "my-toggle"
        expect(toggle).toHaveClass('active'); // Проверяем, что у переключателя есть класс "active"
    });

    test('Не должен иметь класс "active", если isActive=false', () => {
        render(<Toggle isActive={false} changeActive={() => {console.log('test');}} />);
        const toggle = screen.getByRole('button');
        expect(toggle).not.toHaveClass('active'); // Проверяем, что у переключателя нет класса "active"
    });

    test('Не должен быть активным, если disabled=true', () => {
        render(<Toggle isActive changeActive={() => {console.log('test');}} disabled />);
        const toggle = screen.getByRole('button');
        expect(toggle).toBeDisabled(); // Проверяем, что переключатель заблокирован
    });
});