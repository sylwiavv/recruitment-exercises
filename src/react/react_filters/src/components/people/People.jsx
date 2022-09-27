import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const People = (props) => {
  const people = useSelector(({people}) => people.list);
  const query = useSelector(({people}) => people.query);

  const filterPeople = people.filter(({name}) => {
    let valueFromInput = query.query;

    return name.includes(valueFromInput)
  });

  const arrayToMap = filterPeople.length === 0 ?  people : filterPeople;
  const memoizedValue = useMemo(() => arrayToMap, [filterPeople.length]);

  return (
      <>
          {memoizedValue.map(({id, name}) => (
              <div key={id} className='App-box'>{name}</div>
          ))}
      </>

  );
}

People.propTypes = {
  // ...
};

export default People;
