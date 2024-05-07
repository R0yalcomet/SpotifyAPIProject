import React, {useState} from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import MockTracks from "./MockTracks";

function App() {
  const [searchData, setSearchData] = useState(MockTracks);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (newTrack) => {
    let inPlaylist = playlistTracks.some(track => track.id === newTrack.id);
    const newPlaylist = playlistTracks.concat(newTrack)

    if (!inPlaylist) {
      setPlaylistTracks(newPlaylist);
    } 
  };

  const removeTrack = (trackToRemove) => {
    const newPlaylist = playlistTracks.filter(track => track.id != trackToRemove.id);

    setPlaylistTracks(newPlaylist);
  };

  const changePlaylistName = (newPlaylistName) => {
    setPlaylistName(newPlaylistName);
  };

  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar/>
        <div className={styles["App-playlist"]}>
          <SearchResults userSearch={searchData} onAdd={addTrack}/>
          <Playlist name={playlistName} onChangeName={changePlaylistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
};

export default App;
