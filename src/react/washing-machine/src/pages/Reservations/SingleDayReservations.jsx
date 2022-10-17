import React from 'react';
import {Field} from 'redux-form';
import _capitalize from 'lodash/capitalize';
import TimePickerWrapper from './TimePickerWrapper';
import "react-widgets/styles.css";
import DropDownList from "../Users/DropDownList";

import {ErrorWrapper, InputWrapper, Label} from "../../assests/styles/forms/forms.styles"
import {StyledButton} from "../../assests/styles/buttons/buttons.styles";
import {Entry, Footer, Header, MainContainer, SingleEntry} from "../../assests/styles/layout/layout.styles";

const SingleDayReservations = ({fields, meta: {error}}) => {
    return (
        <MainContainer>
            <Header>
                <h5>{_capitalize(fields.name)}</h5>
                <ErrorWrapper>{error}</ErrorWrapper>
            </Header>
            {fields.length === 0 ? <p>There are not reservations.</p> : <p>Reservations:</p>}
            <Entry className={fields.length === 0 ? 'empty-entry' : 'entry'}>
                {fields.map((name, index) => (
                        <SingleEntry key={`${name}-${index}`}>
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
                    <StyledButton background={"gray"} colorIsGray onClick={() => { fields.remove(index)}}>Remove</StyledButton>
                    </SingleEntry>
                ))}
            </Entry>
            <Footer>
                <StyledButton
                    onClick={() => {fields.push({start: null, end: null, user: null})}}
                    color="warning"
                    className="reservations__clear-btn">
                    + Add Entry
                </StyledButton>
            </Footer>
        </MainContainer>
    )
};

export default SingleDayReservations;
