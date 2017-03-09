
import React from  'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

// Create a new component. This component should produce some html

const API_KEY = 'AIzaSyDjDjpPAobAlpnK_p883w7cZ9mV6Ub6GAg';

YTSearch({key: API_KEY, term: 'surfboards'},function(data){
console.log(data);
});

const App =() => {
    return <div>
    <SearchBar />
    </div>;
}

//Take this components generated html and put it on the page.
    ReactDOM.render(<App />, document.querySelector('.container'));
