import React from 'react';
import './Employee.scss';
import { IUser, TooltipPosition } from '../../../types/projects.types';
export interface IEmployeeProps {
    user: IUser;
    position?: TooltipPosition;
    portal?: boolean;
}
declare const Employee: React.FC<IEmployeeProps>;
export default Employee;
