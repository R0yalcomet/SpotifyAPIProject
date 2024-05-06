import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';


const Tracklist = (props) => {

    return (
        <div className={styles.Tracklist}>
            {props.trackData?.map(track => 
                <Track name={track.name} artist={track.artists[0].name} album={track.album} isRemoval={true}/>
            )}
        </div>
    );
};

export default Tracklist;