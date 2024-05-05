import React from 'react';
import styles from './Track.module.css';

const Track = (props) => {

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <button className={styles["Track-action"]}>{props.isRemoval ? "-" : "+"}</button>
        </div>
    );
};

export default Track;