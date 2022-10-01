import React from 'react';
import {connect} from 'react-redux';
import {FieldArray, Form, reduxForm} from 'redux-form';
import {Button, Col, Container, Row} from 'reactstrap';
import _map from 'lodash/map';
import ReactJson from 'react-json-view';

import {WEEK_DAYS} from '../common/constants';
import {clearReservations, saveReservations,} from '../actions/machine';
import SingleDayReservations from './SingleDayReservations';
import './Reservations.scss';
import moment from 'moment';

const emptyErrorMsg = `Can't not be empty`;
const endTimeMsg = `End time should be after start time`;
const durationMsg = `Reservation too long`;
const reservationConflict = 'Conflict between two reservations';
// const reservationsToClose = 'Two reservations too close to each other';

const validate = (values, submitFailed) => {
    let errors = {};

    const isPresent = (values) => {
        Object.entries(values).forEach(([key, value]) => {
            if (value !== []) {
                errors[key] = []
                let err = {};

                value.forEach(({ start, end }) => {
                    if (start === null) {err.start = `${emptyErrorMsg}`}
                    if (end === null) { err.end = `${emptyErrorMsg}`}
                    if (!moment(end).isAfter(start) && end !== null) {
                        err.end = `${endTimeMsg}`
                    }
                    const reservationDuration = Number(moment(end).diff(moment(start), 'hours', true).toFixed(2));
                    if (reservationDuration > 2.50) {
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
                    if (collide2) { errors[key]._error = `${reservationConflict}`}
                    errors[key].push(err);
                })
            }
        });
    }
    isPresent(values);
    return errors;
};


const Reservations = ({
  clearReservations,
  handleSubmit,
  machine,
  saveReservations,
}) => (
  <Container className="reservations">
    <Form onSubmit={handleSubmit(saveReservations)}>
      <Row>
        <Col xs={8}>
          <h2>Reservations</h2>
          {_map(WEEK_DAYS, day => (
            <FieldArray
              key={`single-${day}`}
              component={SingleDayReservations}
              name={day}
              hello={'errors'}
            />
          ))}
          <Button color="primary" type="submit">
            Save data
          </Button>
        </Col>
        <Col xs={4}>
          <ReactJson src={machine} name="machineStoreState" />
          <Button
            onClick={clearReservations}
            color="warning"
            className="reservations__clear-btn"
          >
            Reset Data
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);


const mapStateToProps = state => ({
  machine: state.machine,
  initialValues: state.machine,
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
    enableReinitialize: true,
  })(Reservations),
);
