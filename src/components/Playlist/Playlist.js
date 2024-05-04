import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = () => {

    return (
        <div className={styles.Playlist}>
            <input defaultValue="New Playlist"/>
            <Tracklist/>
            <button className={styles.Playlist-save}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;