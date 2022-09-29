import React from 'react';
import {connect} from 'react-redux';
import {FieldArray, Form, reduxForm, reset} from 'redux-form';
import {Button, Col, Container, Row} from 'reactstrap';
import _map from 'lodash/map';
import ReactJson from 'react-json-view';

import {WEEK_DAYS} from '../common/constants';
import {clearReservations, saveReservations,} from '../actions/machine';
import SingleDayReservations from './SingleDayReservations';
import './Reservations.scss';

const emptyErrorMsg = `Can't not be empty`;

const validate = (values, submitFailed) => {
    console.log(submitFailed);
    let errors = {};

    const isPresent = (values) => {
        Object.entries(values).forEach(([key, value]) => {
            if (value !== []) {
                errors[key] = []
                value.forEach(({start, end}, i) => {
                    let err = {};
                    if (start === null) {
                        err.start = `${emptyErrorMsg}`
                    }
                    if (end === null) {
                        err.end = `${emptyErrorMsg}`
                    }
                    errors[key].push(err);
                })
            }
        });
    }

  isPresent(values);
  console.log(errors)

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


const afterSubmit = (result, dispatch) => {
  console.log('submit')
  dispatch(reset('reservations'))
};


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
    onSubmitSuccess: afterSubmit,

  })(Reservations),
);
