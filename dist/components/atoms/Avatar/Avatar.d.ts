import React from 'react';
import './Avatar.scss';
import { Size } from '../../../types';
export interface IAvatarProps {
    size?: Size;
    /** Ссылка на фото */
    photo?: string;
    /** Фамилия и Имя */
    fullName?: string;
}
declare const Avatar: React.FC<IAvatarProps>;
export default Avatar;
