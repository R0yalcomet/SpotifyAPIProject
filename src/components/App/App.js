import React, {useState} from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify/Spotify";

const exampleTrack = [
  {
      album: {
        name: "Album Name"
      },
      name: "Track Name",
      artists: [{
          name: "Artist Name"
      }],
      id: ""
  }
];

function App() {
  const [searchData, setSearchData] = useState(exampleTrack);
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

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);

    Spotify.save(playlistName, trackURIs);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then(result => setSearchData(result));
  };

  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <div className={styles.App}>
        <SearchBar onSearch={search}/>
        <div className={styles["App-playlist"]}>
          <SearchResults userSearch={searchData} onAdd={addTrack}/>
          <Playlist name={playlistName} onChangeName={changePlaylistName} playlistTracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
};

export default App;
