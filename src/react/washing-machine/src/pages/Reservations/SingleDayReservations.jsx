import React from 'react';
import {Button} from 'reactstrap';
import {Field} from 'redux-form';
import _capitalize from 'lodash/capitalize';
import TimePickerWrapper from './TimePickerWrapper';
import "react-widgets/styles.css";
import DropDownList from "../Users/DropDownList";

import {InputWrapper, Label} from "../../assests/styles/forms/forms.styles"
import {StyledButton} from "../../assests/styles/buttons/buttons.styles";

const SingleDayReservations = ({fields, meta: {error}}) => {
    return (
        <div className="wrapper">
            <div className="header">
                <h5>{_capitalize(fields.name)}</h5>
                <span className="reservations__error">{error}</span>
            </div>
            <div className="entry">
                {fields.map((name, index) => (
                        <div className="single-entry" key={`${name}-${index}`}>
                        <InputWrapper>
                            <Label htmlFor={`${name}.start`}>Start at:</Label>
                            <Field name={`${name}.start`} component={TimePickerWrapper} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label htmlFor={`${name}.end`}>End at:</Label>
                            <Field name={`${name}.end`} component={TimePickerWrapper} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label htmlFor={`${name}.user`}>Your name:</Label>
                            <Field name={`${name}.user`} component={DropDownList} />
                        </InputWrapper>
                    <StyledButton isBig onClick={() => { fields.remove(index)}}>Remove</StyledButton>
                    </div>
                ))}
            </div>
            <div className="footer">
                <Button
                    onClick={() => {fields.push({start: null, end: null, user: null})}}
                    color="warning"
                    className="reservations__clear-btn">
                    + Add Entry
                </Button>
            </div>
        </div>
    )
};

export default SingleDayReservations;
