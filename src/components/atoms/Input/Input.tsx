import React, {
  FC, HTMLProps, ReactNode, useEffect, useRef, useState
} from 'react';
import './Input.scss';
import { fromEvent } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, map
} from 'rxjs/operators';

export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  /** Возможность очистки поля по клику */
  onClear?: () => void;
  /** Дебаунс */
  debounce?: number;
  /** Иконка */
  icon?: ReactNode;
}

const Input: FC<IInputProps> = ({
  onClear,
  debounce = 300,
  icon,
  ...props
}: IInputProps) => {
  /** Ref */
  const ref = useRef<HTMLInputElement>(null);
  /** Значение поля */
  const [value, setValue] = useState<string>(props.defaultValue?.toString() || props.value?.toString() || '');

  // ------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    /** Подписываемся на ввод текста */
    let sub: any;

    if (ref.current) {
      sub = fromEvent(ref.current, 'keyup')
        .pipe(
          map((e: Event) => e),
          debounceTime(debounce),
          distinctUntilChanged()
        )
        .subscribe((e: any) => {
          setValue(e.target.value);
          props.onKeyUp && props.onKeyUp(e);
        });
    }

    return () => {
      try {
        sub && sub.unsubscribe();
      } catch (e) {
        console.log(e);
      }
    };
  }, [onClear, debounce, props.onKeyUp]);

  // ------------------------------------------------------------------------------------------------------------------
  /** Очистка поля ввода и сброс результатов поиска */
  const clearInput = () => {
    if (ref.current) {
      ref.current.value = '';
      setValue('');
      onClear && onClear();
    }
  };

  /** Кнопка поиска и сброса */
  const closeButton = onClear && value.length > 0 && (
    <button className='rf-input__action' onClick={ clearInput }>
      X
    </button>
  );

  // ------------------------------------------------------------------------------------------------------------------

  return (
    <div className={ `rf-input ${props.className || ''}` }>
      <input
        { ...props }
        ref={ ref }
        className='rf-input__field'
        autoComplete='off'
        type={ props.type || 'text' }
      />
      { icon ? <button className='rf-input__action'>{ icon }</button> : closeButton }
    </div>
  );
};

export default Input;