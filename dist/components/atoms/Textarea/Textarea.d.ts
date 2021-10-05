import { FC, HTMLProps } from 'react';
import './Textarea.scss';
export interface ITextareaProps extends HTMLProps<HTMLTextAreaElement> {
    /** Автоматическое изменение высоты */
    autoResize?: boolean;
    /** Количество строк */
    initialRowCount?: number;
    /** Последовательность перехода при нажатии на Tab */
    tabIndex?: number;
    /** Дебаунс */
    debounce?: number;
    /** Вернуть value */
    getValue?: (value: string) => void;
    /** Переводит инпут в невалидный статус */
    invalid?: boolean;
    /**
     * Показывать счетчик символов под инпутом.
     * @default true
     */
    showMaxLength?: boolean;
}
declare const Textarea: FC<ITextareaProps>;
export default Textarea;
