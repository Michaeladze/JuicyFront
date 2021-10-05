import React, { HTMLProps } from 'react';
import './Search.scss';
import { IDebounceResult } from '../../../types/projects.types';
export interface ISearchProps extends HTMLProps<HTMLInputElement> {
    onClear?: () => void;
    isShowClear?: boolean;
    debounce?: number;
    onDebounce?: (result: IDebounceResult) => void;
}
declare const Search: React.FC<ISearchProps>;
export default Search;
