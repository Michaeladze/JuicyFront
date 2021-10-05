import React, { ReactNode } from 'react';
import './PageWithSections.scss';
import { IPageSection } from '../../../types/projects.types';
import { ITab } from '../../../types';
export interface IPageWithSectionsProps {
    title?: ReactNode;
    backUrl?: string;
    onBackUrlClick?: () => void;
    sections?: IPageSection[];
    /** Fixed action menu */
    actionMenu?: ReactNode;
    preloader?: boolean;
    showNavigation?: boolean;
    /** Navigation tabs */
    navigation?: ITab[];
    showHeader?: boolean;
}
declare const PageWithSections: React.FC<IPageWithSectionsProps>;
export default PageWithSections;
