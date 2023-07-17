import { Button, ButtonVariant } from 'src/shared/ui/Button/Button';
import { useTheme } from 'src/app/hooks/useTheme';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { Theme } from 'src/shared/const/theme';
import { SunIcon } from 'src/shared/ui';
import { FC } from 'react';
import cls from './style.module.scss';

export const ThemeSwitcher: FC = () => {
    const { toggleTheme, theme, } = useTheme();

    const isLight = theme === Theme.LIGHT;

    return (
        <Button
            variant={ButtonVariant.NOLINE}
            className={cls.btnSwitch}
            onClick={() => toggleTheme()}
        >
            <SunIcon isSun={false} className={classNames(cls.winds, { [cls.onSun]: isLight, })} />
            <div className={classNames(cls.container, { [cls.light]: isLight, })} />
        </Button>
    );
};