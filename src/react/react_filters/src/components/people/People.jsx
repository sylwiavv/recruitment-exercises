import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const People = (props) => {
  const people = useSelector(({people}) => people.list);
  const query = useSelector(({people}) => people.query);

  const filterPeople = people.filter(({name}) => {
    let valueFromInput = query.query;

    let nameLowerCas = name.toLowerCase();
    let changeValueFromInput = valueFromInput !== undefined ? valueFromInput.toLowerCase() : valueFromInput;

    return nameLowerCas.includes(changeValueFromInput)
  });

  const arrayToMap = (query.query === undefined) ?  people : filterPeople;
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
