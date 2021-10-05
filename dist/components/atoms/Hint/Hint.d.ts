import React, { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';
export interface IHintProps {
    /** основное сообщение*/
    children?: ReactNode | string;
    title?: ReactNode | string;
    button?: ReactNode;
    className?: string;
    variant?: VariantClassic;
    icon?: 'info';
    maxWidth?: string;
    /** Полоска с боку */
    showLine?: boolean;
}
declare const Hint: React.FC<IHintProps>;
export default Hint;
