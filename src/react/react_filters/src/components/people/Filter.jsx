import React from 'react';
import {addNote} from "../../redux/people/reducer";
import {useDispatch} from "react-redux";
// ...


const Filter = (props) => {
    const dispatch = useDispatch();

    const handleAddNote = (e) => {
        const inputValue = e.target.value;

        const query = dispatch(addNote({ query: inputValue}));
        console.log(query.payload);
    };

  return (
      <div className='App-box'>
        <label>
          <input onChange={handleAddNote} />
        </label>
      </div>
  )
}

Filter.propTypes = {
  // ...
};

export default Filter;
