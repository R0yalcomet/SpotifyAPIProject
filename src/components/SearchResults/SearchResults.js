import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../Tracklist/Tracklist';

const SearchResults = () => {

    return (
        <div className={styles.SearchResults}>
            <TrackList/>
        </div>
    );
};

export default SearchResults;