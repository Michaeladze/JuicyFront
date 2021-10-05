import { ReactNode } from 'react';
/** Элемент списка для Radio, Checkbox и Select */
export interface IOption {
    label: string;
    value: string;
    disabled?: boolean;
    node?: ReactNode;
}
export interface ITreeOption extends IOption {
    checked: boolean;
    hasCheckedChild?: boolean;
    parent?: ITreeOption;
    children?: ITreeOption[];
}
export interface ICustomOption extends IOption {
    __isNew__: boolean;
}
export declare function isCustomOption(option: IOption | ICustomOption): option is ICustomOption;
/** Таб */
export interface ITab {
    /** Название вкладки */
    label: ReactNode;
    /** Содержание вкладки */
    tab?: ReactNode;
    /** Доступность вкладки */
    disabled?: boolean;
    /** Активная вкладка */
    active?: boolean;
    /** Ссылка */
    url?: string;
    /** Иконка вкладки */
    icon?: ReactNode;
    /** Действие при клике на вкладку */
    handler?: (element?: HTMLElement) => void;
}
/** Элемент выпадающего списка */
export interface IListElement {
    /** Компонент элемента */
    label: ReactNode;
    /** Обработчик */
    handler?: () => void;
    /** Ссылка */
    url?: string;
    /** ID значение */
    value?: string;
    /** Disabled */
    disabled?: boolean;
    /** Отделение линией */
    separated?: boolean;
}
/** Контекст меню */
export interface IMenuContext {
    onClose: () => void;
    show: boolean;
}
/** Результат обработки файла */
export interface IFileData {
    file: File;
    base64: string;
    base64Compressed?: string;
}
/** Чипсы */
export interface IChips {
    id: string;
    name: string;
    disabled?: boolean;
}
/** Форматированная дата */
export interface IFormattedDate {
    month: string;
    monthLong: string;
    monthShort: string;
    monthName: string;
    dayOfMonth: string;
    dayOfWeek: string;
    hour: string;
    minutes: string;
    year: number;
    date: string;
    time: string;
}
/** Хлебные крошки */
export interface IBreadcrumb {
    label: string;
    url: string;
    disabled?: boolean;
}
/** Тип цветового оформления */
export declare type VariantClassic = 'default' | 'green' | 'yellow' | 'red';
export declare type Variant = VariantClassic | 'blue' | 'lightBlue' | 'turquoise' | 'magenta' | 'purple' | 'violet';
export declare const variantsClassic: VariantClassic[];
export declare const variants: Variant[];
/** Размер */
export declare type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
/** Формат даты для дейтпикера */
export declare type DateFormat = 'dd.mm.yy' | 'dd.mm.yyyy';
/** Логирование */
export interface ILogRecord {
    timestamp: number;
    source: 'network' | 'redux' | 'console';
    snapshot: any;
    name?: string;
    text?: string;
    action?: any;
    pathname?: string;
}
