import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';


const Tracklist = (props) => {

    return (
        <div className={styles.Tracklist}>
            {props.trackData?.map(track => 
                <Track track={track} isRemoval={props.isRemoval} buttonAction={props.buttonAction}/>
            )}
        </div>
    );
};

export default Tracklist;