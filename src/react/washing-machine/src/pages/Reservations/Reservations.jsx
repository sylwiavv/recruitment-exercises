import React from 'react';
import {connect} from 'react-redux';
import {FieldArray, Form, reduxForm} from 'redux-form';
import {Col, Row} from 'reactstrap';
import _map from 'lodash/map';
import ReactJson from 'react-json-view';

import {WEEK_DAYS} from '../../common/constants';
import {clearReservations, saveReservations,} from '../../actions/machine';
import SingleDayReservations from './SingleDayReservations';
import '../../assests/styles/react-widgets/dropdown.scss';
import moment from 'moment';
import {StyledButton} from "../../assests/styles/buttons/buttons.styles";
import {Footer, Header, MainContainer} from "../../assests/styles/layout/layout.styles";
import {emptyErrorMsg, endTimeMsg, durationMsg, reservationConflictMsg} from "../../common/validations_messages"

const validate = (values) => {
    let errors = {};

    Object.entries(values).forEach(([key, value]) => {
        if (value !== []) {
            errors[key] = [];
            value.forEach(({start, end, user}) => {
                let err = {};
                if (!start) {
                    err.start = `${emptyErrorMsg}`
                }
                if (!end) {
                    err.end = `${emptyErrorMsg}`
                }
                if (!user) {
                    err.user = `${emptyErrorMsg}`
                }
                if (!moment(end).isAfter(start) && end !== null) {
                    err.end = `${endTimeMsg}`
                }
                const reservationDurationHours = Number(moment(end).diff(moment(start), 'hours', true).toFixed(2));
                if (reservationDurationHours > 2.50) {
                    err.end = `${durationMsg}`
                }
                let actualReservation = {start, end};
                const conflict = (actualReservation, value) => {
                    let collide = false;
                    let notCollide = value.every((val) => {
                        collide = (moment(val.start).isBetween(actualReservation.start, actualReservation.end) ||
                            moment(val.end).isBetween(actualReservation.start, actualReservation.end))
                        // console.log("START")
                        // console.log('value.length ' + value.length > 1 );
                        // console.log(moment(val.start).isBetween(actualReservation.start, actualReservation.end))
                        // console.log(val.start, actualReservation.start, actualReservation.end)
                        // console.log("END")
                        // console.log(val.end, actualReservation.start, actualReservation.end)
                        // console.log(moment(val.end).isBetween(actualReservation.start, actualReservation.end))
                        // console.log("_____________");
                        //
                        // console.log('colide z funkcji loop ' + collide)
                        return !collide
                    });
                    // console.log('colide z funkcji ' + collide)

                    return !notCollide;
                }
                let collide2 = conflict(actualReservation, value)
                // console.log("COLLIDE " + collide2)
                if (collide2) {
                    errors[key]._error = `${reservationConflictMsg}`
                }
                errors[key].push(err);
            })
        }
    });
    console.log(errors);
    return errors;
};

const Reservations = ({clearReservations, handleSubmit, machine, saveReservations}) => {
    return (
        <Form onSubmit={handleSubmit(saveReservations)}>
            <Row>
                <Col xs={12}>
                    <h1>Reservations</h1>
                    <MainContainer isBigMarginBottom>
                        <Header>
                            <h4>All reservations</h4>
                        </Header>
                        {_map(WEEK_DAYS, day => (
                            <FieldArray
                                key={`single-${day}`}
                                component={SingleDayReservations}
                                name={day}
                            />
                        ))}

                        <Footer isMarginVertical>
                            <StyledButton background={'green'} type="submit">Save all reservations</StyledButton>
                        </Footer>
                    </MainContainer>
                </Col>
                {/*<Col xs={12}>*/}
                {/*    <ReactJson src={machine} name="machineStoreState"/>*/}
                {/*    <StyledButton background={"red"} onClick={clearReservations}>Reset Data</StyledButton>*/}
                {/*</Col>*/}
            </Row>
        </Form>
    );
}

const mapStateToProps = state => ({
    machine: state.machine,
    initialValues: state.machine,
    users: state.users
});

const mapDispatchToProps = {
    clearReservations,
    saveReservations,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'reservations',
        validate,
    })(Reservations),
);
