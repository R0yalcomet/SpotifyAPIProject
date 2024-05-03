import React from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = () => {

    return (
        <div className={styles.SearchBar}>
            <input placeholder='Search a song, artist, or album...'/>
            <button className={styles.SearchButton}>SEARCH</button>
        </div>
    );
};

export default SearchBar;