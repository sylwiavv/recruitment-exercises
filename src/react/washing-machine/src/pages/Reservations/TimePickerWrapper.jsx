import React from 'react';
import DatePicker from 'react-datepicker';

const TimePickerWrapper = ({ input: {onChange, value}, meta: {error, touched} }) => {
    return (
        <>
            <DatePicker
                selected={value !== '' ? new Date(value) : null}
                onChange={onChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
                className="styled-input"
            />
            {touched && <span className="reservations__error">{error}</span>}
        </>
    );
};
export default TimePickerWrapper;
