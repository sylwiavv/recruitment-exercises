import React from 'react';
import RecursiveComponent from './RecursiveComponent';
import useTimer from '../hooks/useTimer';

// write components here
const One = () => null;
const Two = () => null;
const Three = () => null;

const components = [
	One,
	Two,
	Three,
];

function Recursion() {
	const seconds = useTimer();

	return (
		<div className='App-wrapper'>
			<div className='App-timer'>
				{seconds} seconds
			</div>
			<RecursiveComponent components={components} />
		</div>
	);
}

Recursion.propTypes = {
  // ...
};

export default Recursion;
