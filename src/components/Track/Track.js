import React from 'react';
import styles from './Track.module.css';

const Track = (props) => {
    const moveTrack = () => {
        props.buttonAction(props.track)
    };

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artists[0].name} | {props.track.album}</p>
            </div>
            <button className={styles["Track-action"]} onClick={moveTrack}>{props.isRemoval ? "-" : "+"}</button>
        </div>
    );
};

export default Track;