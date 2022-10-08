import React from 'react';
import DatePicker from 'react-datepicker';

const TimePickerWrapper = ({
  input: { onChange, value },
  meta: { error, touched },
}) => {
  return (
    <React.Fragment>
      <DatePicker
        selected={value !== '' ? new Date(value) : null}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        dateFormat="h:mm aa"
        timeCaption="Time"
      />
        {touched && <span className="reservations__error">{error}</span>}

    </React.Fragment>
  );
};
export default TimePickerWrapper;
