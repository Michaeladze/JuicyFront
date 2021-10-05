import { FC } from 'react';
import './Select.scss';
import { IOption } from '../../../types';
export interface ISelectProps {
    /** Варианты выбора */
    options: IOption[];
    /** Изменение значения */
    onChange: (option: IOption[]) => void;
    /** Значение */
    values: IOption[];
    /** Поиск внутри селекта */
    onSearch?: (query: string) => void;
    /** Множественный выбор */
    multiselect?: boolean;
    /** Плейсхолдер */
    placeholder?: string;
    /** Запрещает вводить текст */
    readOnly?: boolean;
    disabled?: boolean;
    /** Максимальное количество выбранных вариантов при multiselect */
    maxOptions?: number;
    /** Прелоудер при ленивой загрузке */
    preloader?: boolean;
    /** Положение тегов - внутри инпута или под селектом */
    tagsPosition?: 'inside' | 'outside';
    /** Очистить селект при выборе значения */
    clearOnSelect?: boolean;
    /** Любое изменяемое значение (зависимость). При изменении этого параметра очищается селект */
    clearHook?: any;
    variant?: 'base' | 'tag';
}
declare const Select: FC<ISelectProps>;
export default Select;
