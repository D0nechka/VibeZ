import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip, TooltipVariant } from './Tooltip';

describe('Tooltip', () => {
    test('Должен рендериться с заданным текстом и показывать/скрывать подсказку при наведении', async () => {
        render(
            <Tooltip text="Hello, World!">
                <button>Hover me</button>
            </Tooltip>
        );

        const button = screen.getByText('Hover me');
        const tooltip = screen.queryByTestId('tooltip-text'); // Подсказка должна быть скрыта до наведения курсора
        expect(tooltip).not.toBeInTheDocument(); // Подсказка не должна быть в документе

        // Наводим курсор на кнопку и ожидаем появление подсказки
        userEvent.hover(button);
        await waitFor(() => {
            const tooltip = screen.queryByTestId('tooltip-text');
            expect(tooltip).toBeInTheDocument(); // Подсказка должна появиться после наведения курсора
        });

        // Уводим курсор и ожидаем скрытия подсказки
        userEvent.unhover(button);
        await waitFor(() => {
            const tooltip = screen.queryByTestId('tooltip-text');
            expect(tooltip).not.toBeInTheDocument(); // Подсказка должна скрыться после увода курсора
        });
    });

    test('Должен рендериться с текстом и вариантом RIGHT', async () => {
        render(
            <Tooltip text="Hello, World!" variant={TooltipVariant.RIGHT}>
                <button>Hover me</button>
            </Tooltip>
        );

        const button = screen.getByText('Hover me');
        const tooltip = screen.queryByTestId('tooltip-text'); // Подсказка должна быть скрыта до наведения курсора
        expect(tooltip).not.toBeInTheDocument(); // Подсказка не должна быть в документе

        // Наводим курсор на кнопку и ожидаем появление подсказки
        userEvent.hover(button);
        await waitFor(() => {
            const tooltip = screen.queryByTestId('tooltip-text');
            expect(tooltip).toBeInTheDocument(); // Подсказка должна появиться после наведения курсора
        });

        // Уводим курсор и ожидаем скрытия подсказки
        userEvent.unhover(button);
        await waitFor(() => {
            const tooltip = screen.queryByTestId('tooltip-text');
            expect(tooltip).not.toBeInTheDocument(); // Подсказка должна скрыться после увода курсора
        });
    });
});