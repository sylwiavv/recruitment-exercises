import React from "react";
import DropdownList from "react-widgets/DropdownList";
import { connect } from "react-redux";

const DropDownList = ({input: {onChange, value}, meta: {error, touched}, users}) => {
    const user = users.users.map(user => user.userName);
    return (
        <>
            <DropdownList
                selected={value !== '' ? value : null}
                value={value}
                data={user}
                onChange={onChange}
                className="styled-input"
            />
            {touched && <span className="reservations__error">{error}</span>}
        </>
    );
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(DropDownList);