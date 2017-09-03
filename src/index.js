import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyBal0-B5ARmac3M37TRcB6eZb4EEzO8rno";

YTsearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

// create a new component and this component should produce some HTML
const App = () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
};

// take this component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

