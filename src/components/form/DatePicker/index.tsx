import React from 'react';
import ReactDatePicker from 'react-datepicker';
import IDatePickerProps from '../../../interfaces/components/IDatePickerProps';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: React.FC<IDatePickerProps> = ({
  // eslint-disable-next-line no-unused-vars
  dateFormat = 'dd/mm/yyyy HH:MM',
  isClearable = true,
  showTimeInput = true,
  maxDate = new Date(2099, 12, 31),
  timeIntervals = 10,
  timeFormat = 'HH::mm',
  ...restInput
}) => {
  return (
    <>
      <ReactDatePicker
        dateFormat={dateFormat}
        showTimeSelect={showTimeInput}
        isClearable={isClearable}
        timeIntervals={showTimeInput ? timeIntervals : undefined}
        timeFormat={showTimeInput ? timeFormat : undefined}
        selected={new Date()}
        maxDate={maxDate}
        {...restInput}
      />
    </>
  );
};

export default DatePicker;
