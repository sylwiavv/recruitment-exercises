import DropdownList from "react-widgets/DropdownList";
import React from "react";
import {connect} from "react-redux";

const DropDownList = ({
                               input: { onChange, value },
                               meta: { error, touched }, users
                           }) => {
    const uss = users.users.map(user => user.userName)

    return (
        <DropdownList
            // value={value}
            // onChange={(nextValue) => setValue(nextValue)}
            selected={value !== '' ? value : null}
            data={uss}
        />
        )

}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(DropDownList);