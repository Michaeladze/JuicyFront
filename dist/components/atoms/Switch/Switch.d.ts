import React, { FC, ReactNode } from 'react';
import './Switch.scss';
import { Size } from '../../../types';
export interface ISwitchProps {
    onChange?: (f: boolean) => void;
    label?: ReactNode;
    helperText?: ReactNode;
    className?: string;
    value?: boolean;
    disabled?: boolean;
    size?: Size;
    style?: React.CSSProperties;
}
declare const Switch: FC<ISwitchProps>;
export default Switch;
