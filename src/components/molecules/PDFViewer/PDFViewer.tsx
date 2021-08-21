import React, {
  useCallback, useEffect, useState
} from 'react';
import './PDFViewer.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import { Document, Page } from 'react-pdf';
/**  костылики для подключения библиотеки*/
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// @ts-ignore
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker.entry';
import DownloadIcon from '../../../assets/icons/Download';
import { download } from '../../../utils/download';
import ButtonPages from '../../atoms/ButtonPages/ButtonPages';
import { Button } from '../../../index';

pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;

export interface IProps {
  file: IRequestAttachment;
}

const PDFViewer: React.FC<IProps> = ({ file }: IProps) => {
  /** Всего страниц в документе */
  const [numPages, setNumPages] = useState(1);
  /** Текущая страница */
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setNumPages(1);
    setCurrentPage(1);
  }, [file]);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: { numPages: number }) => setNumPages(nextNumPages);

  // -------------------------------------------------------------------------------------------------------------------

  /** Переключение страницы */
  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <>
      { file &&
      <div className='pdf-document'>
        <Document file={ file.base64 } onLoadSuccess={ onDocumentLoadSuccess }>
          <Page pageNumber={ currentPage }/>
        </Document>
        <div className='pdf-document__download'>
          <Button buttonType='white' size='s' onClick={() => {
            download(file, file.fileName);
          }}>
            Скачать
            <DownloadIcon className='pdf-document__icon'/>
          </Button>
        </div>
        <div className='pdf-document__pager'>
          <ButtonPages max={numPages} onChange={onPageChange}/>
        </div>
      </div>
      }
    </>
  );
};

export default PDFViewer;
