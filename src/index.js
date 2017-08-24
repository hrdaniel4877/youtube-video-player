import React from 'react';
import ReactDOM from 'react-dom';

// create a new component and this component should produce some HTML
const App = () => {
	return <div>Hi!</div>;
};


// take this component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

