import { render, screen } from '@testing-library/react';
import { Text, TextSize, TextType } from './Text';

describe('Text', () => {
    test('Должен рендериться с заданным размером и типом', () => {
        render(<Text size={TextSize.S} type={TextType.BLUE}>Hello, World!</Text>);
        const text = screen.getByTestId('text');
        expect(text).toBeInTheDocument(); // Проверяем, что текст присутствует в документе
        expect(text).toHaveClass('s'); // Проверяем, что у текста есть класс "s"
        expect(text).toHaveClass('blue'); // Проверяем, что у текста есть класс "blue"
    });

    test('Должен иметь заданный класс', () => {
        render(<Text className="my-text">Hello, World!</Text>);
        const text = screen.getByTestId('text');
        expect(text).toHaveClass('my-text'); // Проверяем, что у текста есть класс "my-text"
    });
});