import React from 'react';
import './Preloader.scss';
import { Size } from '../../../types';
export interface IPreloaderProps {
    className?: string;
    size?: Size;
    variant?: 'default' | 'white' | 'inherit';
}
declare const Preloader: React.FC<IPreloaderProps>;
export default Preloader;
