import React from 'react'
import {addUser, deleteUser, clean} from "../reducers/users";
import {connect} from 'react-redux';
import {Field, formValues, formValueSelector, getFormValues, reduxForm} from "redux-form";
import ReactJson from "react-json-view";
import {Button, Form, Input, ListGroup, ListGroupItem} from "reactstrap";
import _map from "lodash/map";
import DropdownList from "react-widgets/DropdownList";

const renderInput = ({
    label,
input,
meta: { error, touched }}) => (
    <>
        <label>{label}</label>
        <Input {...input} type="text" error={error}  />
        {touched && <span className="reservations__error">{error}</span>}
    </>
)
//
// const validate = values => {
//     const errors = [];
//     if (!values || values === '') { return 'This field is required'}
//     return errors;
// };


const AddUserForm = ({ addUser, deleteUser, users, handleSubmit, clean, error, state, fields }) => {

    const submit = ({firstName, lastName, roomNumber}) => {
        addUser({userName: firstName, userLastName: lastName, roomNumber: roomNumber})}
    const handleRemoveUser = (id, users) => {
        deleteUser(users.users.filter((user) => user.id !==  id ))
    }

    return (
        <>
            <ReactJson src={users} name="usersStoreState"/>
            <h1>Users</h1>
            <ListGroup>
                {_map(users.users, ({id, userName, userLastName, roomNumber}) => (
                        <ListGroupItem key={id}>
                            <div>{userName} {userLastName} {roomNumber}</div>
                            <Button color="danger" onClick={() => handleRemoveUser(id, users)}>Delete User</Button>
                        </ListGroupItem>
                ))}
            </ListGroup>
            <form onSubmit={handleSubmit(values => submit(values))}>
                 <Field name="firstName" label="First Name" component={renderInput} />
                 <Field name="lastName" label="Last Name" component={renderInput}  />
                 <Field name="roomNumber" label="Room Number" component={renderInput}  />
                <Button color="primary" type="submit">Add</Button>
                <Button color="warning" onClick={clean} className="reservations__clear-btn">Reset All Users</Button>
            </form>
            </>
        )
}

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = {
    addUser,
    deleteUser,
    clean,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'users',
        fields: ['firstName', 'lastName', 'roomNumber'],
        enableReinitialize: true,
    })(AddUserForm),
);