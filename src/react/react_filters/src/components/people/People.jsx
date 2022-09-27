import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ...
import {addNote} from "../../redux/people/reducer";
import store from "../../store";

const People = (props) => {
  const people = useSelector(({people}) => people.list);
    const dispatch = useDispatch();
    console.log(store.getState());

    const filterPeople = () => {
      const matchString = 'Elo';
      // console.log(addNote())
      //   dispatch(addNote());

    }

  return (
      <>
        <button onClick={filterPeople}>Click</button>
          {people.map(({id, name}) => (
              <div key={id} className='App-box'>{name}</div>
          ))}
      </>

  );
}

People.propTypes = {
  // ...
};

export default People;
