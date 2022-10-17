import React from 'react';
import DatePicker from 'react-datepicker';
import {ErrorWrapper} from "../../assests/styles/forms/forms.styles";

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
            {touched && <ErrorWrapper>{error}</ErrorWrapper>}
        </>
    );
};
export default TimePickerWrapper;
