import React, {useState} from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import MockTracks from "./MockTracks";

function App() {
  const [searchData, setSearchData] = useState(MockTracks);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState(MockTracks);

  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar/>
        <div className={styles["App-playlist"]}>
          <SearchResults userSearch={searchData}/>
          <Playlist name={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
};

export default App;
