import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../Tracklist/Tracklist';

const SearchResults = (props) => {

    return (
        <div className={styles.SearchResults}>
            <TrackList trackData={props.userSearch} isRemoval={false} buttonAction={props.onAdd}/>
        </div>
    );
};

export default SearchResults;