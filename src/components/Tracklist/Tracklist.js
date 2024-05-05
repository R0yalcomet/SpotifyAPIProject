import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';
import MockTracks from './MockTracks';

const Tracklist = () => {

    return (
        <div className={styles.Tracklist}>
            {MockTracks.map(track => 
                <Track name={track.name} artist={track.artists[0].name} album={track.album} isRemoval={true}/>
            )}
        </div>
    );
};

export default Tracklist;