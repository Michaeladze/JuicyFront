import React from 'react';
import './CompletePopup.scss';
export interface ICompletePopupProps {
    label: string;
    onClose: () => void;
    confirm?: boolean;
}
declare const CompletePopup: React.FC<ICompletePopupProps>;
export default CompletePopup;
