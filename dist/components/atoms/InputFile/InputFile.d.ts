import React, { ReactNode } from 'react';
import './InputFile.scss';
import { IFileData } from '../../../types';
import { IButtonProps } from '../Button/Button';
/**
 * Файловый инпут для небольших файлов, конвертирует файл в base64.
 * Передает в коллбек setFile объект c файлом и его base64 версией { file: File, base64: string }
 *
 */
export interface IFileInputProps extends Omit<IButtonProps, 'onError'> {
    name?: string;
    accept?: string;
    multiple?: boolean;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    files?: IFileData[];
    /** Функция возвращает файл в компонент */
    setFile: (file: IFileData[]) => void;
    /** Коллбек при ошибке */
    onError?: (err: Error) => void;
    /** Максимальный размер - kB */
    maxSize?: number;
    /** Количество файлов */
    count?: number;
    /** Сжать изображения */
    compressImages?: boolean;
    showChips?: boolean;
    customPlaceholder?: ReactNode;
}
declare const InputFile: React.FC<IFileInputProps>;
export default InputFile;
