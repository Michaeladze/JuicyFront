import { FC, ReactNode } from 'react';
import './Tooltip.scss';
import { TooltipPosition } from '../../../types/projects.types';
/** Основной компонент на экспорт. */
export interface ITooltipProps {
    /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
    children: [ReactNode, ReactNode];
    /** Позиция тултипа */
    position?: TooltipPosition;
    /** Отключить показ самого тултипа */
    isVisible?: boolean;
    /** Дополнительный класс */
    className?: string;
    /** Портал в элемент - по умолчанию body */
    portal?: boolean;
    /** Цвет тултипа */
    background?: 'default' | 'white';
}
declare const Tooltip: FC<ITooltipProps>;
export default Tooltip;
