import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IAutoCompleteProps } from '../../../interfaces/components/IAutoCompleteProps';
import { IOptionProps } from '../../../interfaces/components/IOptionProps';
import * as S from './styles';

const AutoComplete: React.FC<IAutoCompleteProps> = ({
  options,
  name,
  value,
  perPage = 6,
  onChange,
  error,
}) => {
  // const refOpts = useRef<IOptionProps[]>([]);
  const [refOpts, setRefOpts] = useState<IOptionProps[]>(options);
  const [isFocused, setIsFocused] = useState(false);
  const refInputWrapper = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);
  const refSelectWrapper = useRef<HTMLDivElement>(null);
  const [optionSelected, setOptionSelected] = useState<
    IOptionProps | undefined
  >();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event): void {
      if (
        refInputWrapper.current &&
        !refInputWrapper.current.contains(event.target)
      ) {
        setIsFocused(false);
        setPage(1);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refInputWrapper]);

  useEffect(() => {
    if (value) setOptionSelected(value);
  }, [value]);

  const optionsPerPage = refOpts.slice(
    page * perPage - perPage,
    page * perPage,
  );

  return (
    <div ref={refInputWrapper}>
      <S.Input
        type="text"
        name={name}
        role="textbox"
        onChange={(e) => {
          const filteredOptions = options.filter((option) =>
            option.label
              .toString()
              .toLowerCase()
              .includes(e.target.value.toLowerCase()),
          );
          setPage(1);
          setRefOpts(filteredOptions);
        }}
        onFocus={() => {
          setIsFocused(true);
          setOptionSelected(undefined);
        }}
        onBlur={() => setOptionSelected(value)}
        autoComplete="off"
        value={optionSelected?.label}
        error={error}
      />

      <S.SelectWrapper isActive={isFocused}>
        <S.Option>
          {options.length > 0 ? 'Selecione um...' : 'Sem opções'}
        </S.Option>
        {optionsPerPage.map((option) => (
          <S.Option
            key={option.label}
            value={option.value}
            onClick={() => {
              onChange(option);
              setIsFocused(false);
            }}
          >
            {option.label}
          </S.Option>
        ))}
        <S.Pagination ref={refSelectWrapper}>
          <S.IconPagination onClick={() => page > 1 && setPage(page - 1)}>
            <FaArrowLeft size={16} style={{ marginTop: '10px' }} />
          </S.IconPagination>
          <p style={{ marginTop: '8px' }}>{page}</p>
          <S.IconPagination
            onClick={() =>
              page < Math.ceil(refOpts.length / perPage) && setPage(page + 1)
            }
          >
            <FaArrowRight size={16} style={{ marginTop: '10px' }} />
          </S.IconPagination>
        </S.Pagination>
      </S.SelectWrapper>
    </div>
  );
};

export default AutoComplete;
