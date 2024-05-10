import React from 'react';
import styles from './Track.module.css';
import cover from './placeholderAlbum.jpg';

const Track = (props) => {
    const moveTrack = () => {
        props.buttonAction(props.track)
    };

    return (
        <div className={styles.Track}>
             <img src={props.track.album.images ? props.track.album.images[2].url : cover}/>
            <div className={styles["Track-information"]}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artists[0].name} | {props.track.album.name}</p>
            </div>
            <button className={styles["Track-action"]} onClick={moveTrack}>{props.isRemoval ? "-" : "+"}</button>
        </div>
    );
};

export default Track;