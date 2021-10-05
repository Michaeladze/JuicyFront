import { FC } from 'react';
import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';
import './Card.scss';
export interface ICard {
    date: string;
    id: string;
    onClick: () => void;
    requestNumber: string;
    statusColor: Variant;
    statusText: string;
    subTitle?: string;
    title: string;
    user: IUser;
}
declare const Card: FC<ICard>;
export default Card;
