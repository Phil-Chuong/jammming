import React from "react";
import './SearchResults.css';
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h1>Results</h1>
                <TrackList tracks={this.props.searchResults}
                           onAdd={this.props.onAdd}
                            isRemoval={false}
                            onRemoval={this.props.onRemove}
                         />
            </div>
        )
    }
}

export default SearchResults;