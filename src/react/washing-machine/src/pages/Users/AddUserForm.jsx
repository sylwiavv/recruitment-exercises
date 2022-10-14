import React from 'react'
import {addUser, deleteUser, clean} from "../../reducers/users";
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
import ReactJson from "react-json-view";
import {Button, Form, Input, ListGroup, ListGroupItem} from "reactstrap";
import _map from "lodash/map";
import {StyledButton} from "../../assests/styles/buttons/buttons.styles";
import {InputWrapper, Label} from "../../assests/styles/forms/forms.styles";
import _capitalize from "lodash/capitalize";

const renderInput = ({label, input, meta: { error, touched }} ) => (
    <>
        <Label>{label}</Label>
        <Input {...input} type="text" error={error}  className="styled-input"/>
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
        <div className="elo">
            <h1>Users</h1>
            <div className="main-container">
                <div className="header">
                    <h4>Add User</h4>
                </div>
                <Form onSubmit={handleSubmit(values => submit(values))}>
                <div className="single-entry">
                        <InputWrapper><Field name="firstName" label="First Name" component={renderInput} /></InputWrapper>
                        <InputWrapper><Field name="lastName" label="Last Name" component={renderInput}  /></InputWrapper>
                        <InputWrapper><Field name="roomNumber" label="Room Number" component={renderInput}  /></InputWrapper>
                </div>
                <div className="footer">
                    <StyledButton type="submit">Add</StyledButton>
                    <StyledButton color="warning" onClick={clean} className="reservations__clear-btn">Reset All Users</StyledButton>
                </div>
                </Form>
            </div>

            <ListGroup>
                {_map(users.users, ({id, userName, userLastName, roomNumber}) => (
                    <ListGroupItem key={id}>
                        <div>{userName} {userLastName} {roomNumber}</div>
                        <Button color="danger" onClick={() => handleRemoveUser(id, users)}>Delete User</Button>
                    </ListGroupItem>
                ))}
            </ListGroup>

            <ReactJson src={users} name="usersStoreState"/>
        </div>
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