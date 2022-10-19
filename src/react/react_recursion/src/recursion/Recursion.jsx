import React from 'react';
import RecursiveComponent from './RecursiveComponent';
import PropTypes from 'prop-types';

const One = () => null;
const Two = () => null;
const Three = () => null;

const components = [
	One,
	Two,
	Three
];

function Recursion() {
	return (
		<div className='App-wrapper'>
			<RecursiveComponent components={components} />
		</div>
	);
}

Recursion.propTypes = {
  components: PropTypes.object
};

export default Recursion;
