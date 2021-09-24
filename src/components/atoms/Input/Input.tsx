import React, {
  FC, HTMLProps, ReactNode, useEffect, useRef, useState
} from 'react';
import './Input.scss';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Close from '../../../assets/icons/Close';
import { IDebounceResult } from '../../../types/projects.types';

export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  /** Возможность очистки поля по клику */
  onClear?: () => void;
  /** Дебаунс */
  debounce?: number;
  /** Иконка */
  icon?: ReactNode;
  variant?: 'base' | 'inline';
  /** Переводит инпут в невалидный статус */
  invalid?: boolean;
  /** Контент для вставки в начало инпута */
  startAdornment?: ReactNode;
  /** Контент для вставки в конец инпута */
  endAdornment?: ReactNode;
  /** обработка нажатий с эффектом debounce */
  onDebounce?:(result:IDebounceResult)=>void
}

const Input: FC<IInputProps> = ({
  className,
  onClear,
  debounce = 300,
  icon,
  variant = 'base',
  startAdornment,
  endAdornment,
  disabled,
  invalid,
  onFocus,
  onBlur,
  onDebounce,
  ...props
}: IInputProps) => {
  /** Ref */
  const ref = useRef<HTMLInputElement>(null);
  /** Значение поля */
  const [value, setValue] = useState<string>(props.defaultValue?.toString() || props.value?.toString() || '');
  /** Находится ли инпут в состоянии фокуса */
  const [isFocused, setFocused] = useState(false);

  // ------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: Subscription;

    if (ref.current && onDebounce) {
      sub = fromEvent(ref.current, 'keyup')
        .pipe(
          debounceTime(debounce),
          distinctUntilChanged()
        )
        .subscribe((e: Event) => {
          const debounceString = (e.target as HTMLInputElement).value;
          setValue(debounceString);
          onDebounce({
            event: e,
            debounceString
          });
        });
    }

    return () => {
      sub && sub.unsubscribe();
    };
  }, [ debounce, onDebounce]);

  // ------------------------------------------------------------------------------------------------------------------
  /** Очистка поля ввода и сброс результатов поиска */
  const clearInput = () => {
    if (ref.current) {
      ref.current.value = '';
      setValue('');
      onDebounce && onDebounce({ debounceString: '' });
      onClear && onClear();
    }
  };

  /** Кнопка поиска и сброса */
  const closeButton = onClear && value.length > 0 && (
    <button type='button' className='rf-input__action' onClick={ clearInput } aria-label='Сбросить'>
      <Close/>
    </button>
  );

  // ------------------------------------------------------------------------------------------------------------------

  const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  // ------------------------------------------------------------------------------------------------------------------

  // Делаем проверку на className для обратной совместимости.
  const isInvalid = invalid || className && className.indexOf('invalid') !== -1;

  return (
    <label
      className={`
        rf-input 
        ${variant === 'inline' ? 'rf-input--inline' : ''} 
        ${disabled ? 'rf-input--disabled' : ''} 
        ${isFocused ? 'rf-input--focused' : ''} 
        ${isInvalid ? 'rf-input--invalid' : ''}
        ${className || ''}`
      }
    >
      {!!startAdornment && <div className='rf-input__adornment rf-input__adornment--start'>{startAdornment}</div>}
      <input
        { ...props }
        ref={ ref }
        className={'rf-input__field'}
        autoComplete='off'
        type={ props.type || 'text' }
        disabled={disabled}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      {!!endAdornment && <div className='rf-input__adornment rf-input__adornment--end'>{endAdornment}</div>}
      { icon ? <button type='button' className='rf-input__action'>{ icon }</button> : closeButton }
    </label>
  );
};

export default Input;
