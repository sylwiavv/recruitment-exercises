import React from "react";
import {Field, reduxForm} from "redux-form"
import {deleteUser} from "../actions/machine";
import {connect} from "react-redux";
import ReactJson from "react-json-view";
import {Button, Input} from "reactstrap";
import {saveUser} from "../reducers/users";

// const validate = (fields) => {
//     const {firstName, lastName} = fields;
//     return {
//         firstName: !firstName ? "Add name" : undefined,
//         lastName: !lastName ? "Add name" : undefined,
//     };
// }
const renderInput = ({input, meta: { error, touched }}) => (
    <>
        <Input {...input} type="text" error={error}  />
        {touched && <span className="reservations__error">{error}</span>}
    </>

)

const onSubmit = (values) => {
    // alert(JSON.stringify(values))
    console.log(JSON.stringify(values))
}

const validate = values => {
    const errors = [];
    if (!values || values === '') { return 'This field is required'}
    return errors;
};

const SignInForm = ({
    deleteUser,
    handleSubmit,
    valid,
    users,
    saveUser,
    fields,
    error,}) => (
    <>
        <h2>Users</h2>
        {/*<form onSubmit={handleSubmit(saveUser)}>*/}
        <form onSubmit={handleSubmit(saveUser)}>            {/*<h5>{_capitalize(fields.firstName)}</h5>*/}

            <ReactJson src={users} name="usersStoreState" />
            <div>
                <label htmlFor="first_name">
                    <span>First name </span>
                    <Field name="first_name" component={renderInput} validate={validate}/>
                </label>
                {/*<span className="reservations__error">{error}</span>*/}

            </div>
            <div>
                <label htmlFor="last_name">
                    <span>Last name </span>
                    <Field name="last_name" component={renderInput} validate={validate}/>
                </label>
            </div>
            <Button type="submit" color="primary" >Submit</Button>
            {/*<button onClick={() => {*/}
            {/*    fields.push({ firstName: null, lastName: null });*/}
            {/*}}>Submit</button>*/}
        </form>
    </>
)

const mapStateToProps = state => ({
    users: state.users,
    initialValues: state.users,
});

const mapDispatchToProps = {
    saveUser,
    deleteUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(
    reduxForm({
        form: 'SignInForm',
        validate,
        onSubmit,
    })(SignInForm),
);

