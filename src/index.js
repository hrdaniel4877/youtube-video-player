import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyBal0-B5ARmac3M37TRcB6eZb4EEzO8rno";

// create a new component and this component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos: []};
		
		YTsearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({videos});
		});
	}
	render() {
		return ( 
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	};
};

// take this component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
