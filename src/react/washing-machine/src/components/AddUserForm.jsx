// import React from "react";
// import {Field, reduxForm} from "redux-form"
// import {deleteUser} from "../actions/machine";
// import {connect} from "react-redux";
// import ReactJson from "react-json-view";
// import {Button, Input} from "reactstrap";
// import {saveUser} from "../reducers/users";
//
// // const validate = (fields) => {
// //     const {firstName, lastName} = fields;
// //     return {
// //         firstName: !firstName ? "Add name" : undefined,
// //         lastName: !lastName ? "Add name" : undefined,
// //     };
// // }
// const renderInput = ({input, meta: { error, touched }}) => (
//     <>
//         <Input {...input} type="text" error={error}  />
//         {touched && <span className="reservations__error">{error}</span>}
//     </>
//
// )
//
// const onSubmit = (values) => {
//     // alert(JSON.stringify(values))
//     console.log(JSON.stringify(values))
// }
//
// const validate = values => {
//     const errors = [];
//     if (!values || values === '') { return 'This field is required'}
//     return errors;
// };
//
// const AddUserForm = ({
//     error,}) => (
//     <>
//         <h2>Users</h2>
//     {/*    /!*<form onSubmit={handleSubmit(saveUser)}>*!/*/}
//     {/*    /!*<form onSubmit={handleSubmit(saveUser)}>            /!*<h5>{_capitalize(fields.firstName)}</h5>*!/*!/*/}
//
//     {/*        <ReactJson src={users} name="usersStoreState" />*/}
//     {/*/!*        <div>*!/*/}
//     {/*/!*            <label htmlFor="first_name">*!/*/}
//     {/*/!*                <span>First name </span>*!/*/}
//     {/*/!*                <Field name="first_name" component={renderInput} validate={validate}/>*!/*/}
//     {/*/!*            </label>*!/*/}
//     {/*/!*            /!*<span className="reservations__error">{error}</span>*!/*!/*/}
//
//     {/*/!*        </div>*!/*/}
//     {/*/!*        <div>*!/*/}
//     {/*/!*            <label htmlFor="last_name">*!/*/}
//     {/*/!*                <span>Last name </span>*!/*/}
//     {/*/!*                <Field name="last_name" component={renderInput} validate={validate}/>*!/*/}
//     {/*/!*            </label>*!/*/}
//     {/*/!*        </div>*!/*/}
//     {/*/!*        <Button type="submit" color="primary" >Submit</Button>*!/*/}
//     {/*/!*        /!*<button onClick={() => {*!/*!/*/}
//     {/*/!*        /!*    fields.push({ firstName: null, lastName: null });*!/*!/*/}
//     {/*/!*        /!*}}>Submit</button>*!/*!/*/}
//     {/*/!*    </form>*!/*/}
//     </>
// )
// export default AddUserForm;
// // const mapStateToProps = state => ({
// //     users: state.users,
// //     initialValues: state.users,
// // });
// //
// // const mapDispatchToProps = {
// //     saveUser,
// //     deleteUser,
// // };
// //
// // export default connect(
// //     mapStateToProps,
// //     mapDispatchToProps,
// // )(
// //     reduxForm({
// //         form: 'AddUserForm',
// //         validate,
// //         onSubmit,
// //     })(AddUserForm),
// // );
//
import React from 'react'
import {addUser, deleteUser, clean} from "../reducers/users";
import {connect} from 'react-redux';
import {reduxForm} from "redux-form";
import ReactJson from "react-json-view";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import _map from "lodash/map";

const AddUserForm = ({ addUser, deleteUser, users, handleSubmit, clean, fields }) => {
    const handleAddUser = () => {
        addUser({userName: 'Sylwia2', userLastName: 'Mentel'})
        return console.log(users)
    }

    const handleRemoveUser = (id) => {
        deleteUser(users.users.filter((user) => user.id !==  id ))
    }


    return (
        <>
            <ReactJson src={users} name="usersStoreState"/>

            <h1>Users</h1>
            <ListGroup>
                {_map(users.users, ({id, userName, userLastName}) => (
                        <ListGroupItem key={id}>
                            <div>{userName} {userLastName}</div>
                            <Button color="danger" onClick={() => handleRemoveUser(id)}>Delete User</Button>
                        </ListGroupItem>
                ))}
            </ListGroup>
        <Button color="primary" onClick={handleAddUser}>Add</Button>
        <Button color="warning" onClick={clean} className="reservations__clear-btn">Reset All Users</Button>
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
        enableReinitialize: true,
    })(AddUserForm),
);