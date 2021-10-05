import React, { ReactNode } from 'react';
import './Tile.scss';
export interface ITileProps {
    children: ReactNode | ReactNode[];
    className?: string;
    type?: 'default' | 'stretch';
    hideBackground?: boolean;
}
declare const Tile: React.FC<ITileProps>;
export default Tile;
