import React, {useState} from 'react';
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = ({target}) => {
        setTerm(target.value);
    };

    const handleSearch = () => {
        props.onSearch(term);
    };

    return (
        <div className={styles.SearchBar}>
            <input placeholder='Search a song, artist, or album...' onChange={handleTermChange}/>
            <button className={styles.SearchButton} onClick={handleSearch}>SEARCH</button>
        </div>
    );
};

export default SearchBar;