import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// ...

const People = (props) => {
  const people = useSelector(({people}) => people.list);

  return (
        people.map(({id, name}) => (
              <div className='App-box'>{name}</div>
        ))
  );
}

People.propTypes = {
  // ...
};

export default People;
