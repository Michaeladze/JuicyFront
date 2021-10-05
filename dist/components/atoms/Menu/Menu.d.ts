import React, { ReactNode } from 'react';
import './Menu.scss';
import { IListElement, IMenuContext } from '../../../types';
export interface IListProps {
    /** Кнопка открытия меню */
    children: ReactNode;
    /** Элементы меню */
    list?: IListElement[];
    /** Компонент вместо списка */
    content?: ReactNode;
    /** Класс */
    className?: string;
    /** Положение слева или справа */
    position?: 'left' | 'right' | 'top-left' | 'top-right';
    /** Блок, относительно которого выравнивается меню */
    relativeBlock?: HTMLElement;
    /**
     * Позиционировать меню через портал.
     * Убедитесь что `relativeBlock` имеет `position` `relative` или `absolute`.
     */
    portal?: boolean;
    /** Меню будет отображено рядом с указанным элементом вместо тоггла */
    anchorElement?: HTMLElement | null;
}
/** Контекст для передачи функций работы с меню. */
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<IListProps>;
export default Menu;
