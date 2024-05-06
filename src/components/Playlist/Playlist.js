import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = (props) => {

    return (
        <div className={styles.Playlist}>
            <input defaultValue={props.name}/>
            <Tracklist trackData={props.playlistTracks}/>
            <button className={styles["Playlist-save"]}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;