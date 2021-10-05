import React, { ReactNode } from 'react';
import './Datepicker.scss';
import { DateFormat, IDateVariants } from './DatepickerCalendar/datepicker.types';
export interface IDatepickerProps {
    name?: string;
    placeholder?: string;
    defaultValue?: Date | string | number;
    disabled?: boolean;
    readOnly?: boolean;
    min?: Date | string | number;
    max?: Date | string | number;
    onChange?: (value: IDateVariants, name?: string) => void;
    /** Диапазон */
    range?: boolean;
    /** Показывать день недели в инпуте */
    showDayOfWeek?: boolean;
    /** Локализация */
    locale?: 'ru' | 'en';
    /** Кнопка Сегодня */
    showTodayButton?: boolean;
    position?: 'left' | 'right';
    /** Формат даты */
    format?: DateFormat;
    /** Ограничения на дни недели 0 - 6 */
    disableWeekDays?: number[];
    /** Кастомная кнопка */
    children?: ReactNode | ReactNode[];
}
declare const Datepicker: React.FC<IDatepickerProps>;
export default Datepicker;
