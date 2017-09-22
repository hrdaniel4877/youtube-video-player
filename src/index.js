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
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	};

	videoSearch(term) {
		YTsearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});		
	};

	render() {
		return ( 
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
					videos = {this.state.videos} />
			</div>
		);
	};
};

// take this component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
