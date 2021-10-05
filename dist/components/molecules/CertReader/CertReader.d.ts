import React from 'react';
import './CertReader.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import { Certificate } from 'crypto-pro';
import { IButtonProps } from '../../atoms/Button/Button';
export interface IProps {
    /** входящий файл на подпись*/
    file: IRequestAttachment;
    /** успех*/
    onSuccess: (result: ICertResult) => void;
    /** ошибка в тч и с плагинами*/
    onError: (e: any) => void;
    /** название кнопки*/
    buttonTitle?: string;
    /** фильтр сертификатов */
    filter?: (cert: Certificate) => Promise<boolean>;
    /** пропсы для кнопки */
    btnProps?: IButtonProps;
}
export interface IBrowserCert {
    /** имя пользователя*/
    issuerName: string;
    /** название сертификата*/
    name: string;
    /** персональный ключ*/
    thumbprint: string;
    /** Дата выпуска сертификата */
    validFrom: string;
    /** Дата срока годности сертификата */
    validTo: string;
}
export interface ICertResult {
    data: IRequestAttachment;
    cert: IBrowserCert;
}
declare const CertReader: React.FC<IProps>;
export default CertReader;
