import React from 'react';
import PropTypes from 'prop-types';

function RecursiveComponent({components}) {
    return (
        <div className="App-box">{
            components[0].name}{components.length > 1
            && RecursiveComponent({ components: components.slice(1)})}
        </div>
    );
};

RecursiveComponent.propTypes = {
    components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default RecursiveComponent;