import React from 'react'
import {addUser, deleteUser, clean} from "../../actions/users";
import {connect} from 'react-redux';
import {Field, reduxForm, reset} from "redux-form";
import ReactJson from "react-json-view";
import {Form, Input} from "reactstrap";
import _map from "lodash/map";
import {StyledButton} from "../../assests/styles/buttons/buttons.styles";
import {ErrorWrapper, InputWrapper, Label} from "../../assests/styles/forms/forms.styles";
import {UserData, UserItem, UsersWrapper} from "./Users.styles";
import {Footer, Header, MainContainer, SingleEntry} from "../../assests/styles/layout/layout.styles";
import {emptyErrorMsg, notNumberErrorMsg} from "../../common/validations_messages"

const validate = (values) => {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = `${emptyErrorMsg}`
    }
    if (!values.lastName) {
        errors.lastName = `${emptyErrorMsg}`
    }
    if (!values.roomNumber) {
        errors.roomNumber = `${emptyErrorMsg}`
    } else if (isNaN(values.roomNumber)) {
        errors.roomNumber = `${notNumberErrorMsg}`
    }

    return errors;
};

const renderInput = ({label, input, meta: { error, touched }} ) => (
    <>
        <Label>{label}</Label>
        <Input {...input} type="text" error={error}  className="styled-input"/>
        {touched && <ErrorWrapper>{error}</ErrorWrapper>}
    </>
);

const UsersForm = ({ addUser, deleteUser, users, handleSubmit, clean}) => {
    const submit = ({firstName, lastName, roomNumber}) => {
        addUser({userName: firstName, userLastName: lastName, roomNumber: roomNumber})
        // reset('users');
    }

    const handleRemoveUser = (id, users) => {
        deleteUser(users.users.filter((user) => user.id !==  id ))
    }

    return (
        <MainContainer>
            <h1>Users</h1>
            <MainContainer>
                <Header><h4>Users list</h4></Header>
                {users.users.length === 0 ? <p>Users list is empty</p> :
                    <UsersWrapper>
                        {_map(users.users, ({id, userName, userLastName, roomNumber}) => (
                            <UserItem key={id}>
                                <UserData><span>Name: </span>{userName}</UserData>
                                <UserData><span>Last name: </span>{userLastName}</UserData>
                                <UserData><span>Room number: </span>{roomNumber}</UserData>
                                <StyledButton background={"gray"} notMarginTop colorIsGray onClick={() => handleRemoveUser(id, users)}>Remove User</StyledButton>
                            </UserItem>
                        ))}
                    </UsersWrapper>
                }
            </MainContainer>
            <MainContainer isBigMarginBottom>
                <Header><h4>Add User</h4></Header>
                <Form onSubmit={handleSubmit(values => submit(values))}>
                <SingleEntry>
                    <InputWrapper><Field name="firstName" label="First Name" component={renderInput} /></InputWrapper>
                    <InputWrapper><Field name="lastName" label="Last Name" component={renderInput}  /></InputWrapper>
                    <InputWrapper><Field name="roomNumber" label="Room Number" component={renderInput}  /></InputWrapper>
                </SingleEntry>
                <Footer isMarginVertical>
                   <StyledButton background={"green"} type="submit">Add</StyledButton>
                </Footer>
                </Form>
            </MainContainer>
            {/*<ReactJson src={users} name="usersStoreState"/>*/}
            {/*<StyledButton background={"red"} onClick={clean} className="reservations__clear-btn">Reset All Users</StyledButton>*/}
        </MainContainer>
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

const afterSubmit = (result, dispatch) =>
    dispatch(reset('users'));

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'users',
        validate,
        onSubmitSuccess: afterSubmit,
    })(UsersForm),
);