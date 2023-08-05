import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonSize, ButtonVariant } from './Button';

describe('Button', () => {
    test('Должен правильно отрисовываться с детьми', () => {
        render(<Button>Кликни меня</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Кликни меня');
    });

    test('Должен правильно отрисовываться с текстом', () => {
        render(<Button text="Кликни меня" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('Кликни меня');
    });

    test('Должен применять классы по умолчанию', () => {
        render(<Button>Кликни меня</Button>);

        expect(screen.getByRole('button')).toHaveClass('button', 'm', 'primary', 'center');
    });

    test('Должен применять заданный размер и вариант', () => {
        render(<Button size={ButtonSize.XS} variant={ButtonVariant.OUTLINE}>Кликни меня</Button>);

        expect(screen.getByRole('button')).toHaveClass('button', 'xs', 'outline', 'center');
    });

    test('Должен применять пользовательский className', () => {
        render(<Button className="my-custom-class">Кликни меня</Button>);

        expect(screen.getByRole('button')).toHaveClass('my-custom-class');
    });

    test('Должен вызывать функцию при клике', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Кликни меня</Button>);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});