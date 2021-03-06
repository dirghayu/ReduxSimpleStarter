
import React, {Component} from  'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'
import YTSearch from 'youtube-api-search'
import _ from 'lodash';
const API_KEY = 'AIzaSyDjDjpPAobAlpnK_p883w7cZ9mV6Ub6GAg';


class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("Yoga");

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term},(videos)=>{
          this.setState({
          videos: videos,
          selectedVideo : videos[0]});
       });

    }

    render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},3000 );
        return <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=> this.setState({selectedVideo})}/>
        </div>;
    }
}

//Take this components generated html and put it on the page.
    ReactDOM.render(<App />, document.querySelector('.container'));
