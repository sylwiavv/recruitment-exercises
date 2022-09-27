import React from 'react';
import { filterPeople } from "../../redux/people/actions";
import { useDispatch } from "react-redux";

const Filter = (props) => {
    const dispatch = useDispatch();

    const handleInputOnChange = (e) => {
        const inputValue = e.target.value;
        dispatch(filterPeople({ query: inputValue }));
    };

  return (
      <div className='App-box'>
        <label>
          <input onChange={handleInputOnChange} />
        </label>
      </div>
  )
}

Filter.propTypes = {
  // ...
};

export default Filter;
