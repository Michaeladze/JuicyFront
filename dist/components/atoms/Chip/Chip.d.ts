import React, { ReactNode } from 'react';
import './Chip.scss';
import { Size } from '../../../types';
export interface ITagProps {
    children: ReactNode | ReactNode[];
    onClick?: () => void;
    onRemove?: () => void;
    disabled?: boolean;
    size?: Size;
    type?: 'primary' | 'secondary' | 'outline';
    icon?: ReactNode;
    iconPosition?: 'right' | 'left';
}
declare const Chip: React.FC<ITagProps>;
export default Chip;
