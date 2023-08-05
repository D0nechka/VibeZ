import { classNames, Mods } from './classNames';

describe('Функция classNames', () => {
    test('Должна возвращать правильное имя класса без модификаторов и дополнительных классов', () => {
        const result = classNames('main-class');
        expect(result).toBe('main-class');
    });

    test('Должна включать дополнительные классы при передаче', () => {
        const result = classNames('main-class', {}, [ 'additional-class', 'another-class' ]);
        expect(result).toBe('main-class additional-class another-class');
    });

    test('Должна включать модификаторы с true значениями', () => {
        const mods: Mods = {
            'modifier-class': true,
            'another-modifier-class': 1,
        };
        const result = classNames('main-class', mods);
        expect(result).toBe('main-class modifier-class another-modifier-class');
    });

    test('Должна исключать модификаторы с false значениями', () => {
        const mods: Mods = {
            'modifier-class': false,
            'another-modifier-class': undefined,
            'yet-another-modifier': null,
        };
        const result = classNames('main-class', mods);
        expect(result).toBe('main-class');
    });
});