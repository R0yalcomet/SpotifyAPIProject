import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = (props) => {
    const handleNameChange = ({value}) => {
        props.onChangeName(value);
    };

    return (
        <div className={styles.Playlist}>
            <input value={props.name} onChange={handleNameChange}/>
            <Tracklist trackData={props.playlistTracks} isRemoval={true} buttonAction={props.onRemove}/>
            <button className={styles["Playlist-save"]} onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;