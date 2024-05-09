import {useState} from "react"

const clientId = 'e9baae3b683444608e90477318dd2a16';
const redirectUri = 'http://localhost:3000';

let accessToken = '';
let expireToken;

const Spotify = {
    getAccessToken : () => {
        if (accessToken) {
            return;
        };

        const tokenURL = window.location.href.match(/access_token=([^&]*)/);
        const expireURL = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenURL && expireURL) {
            accessToken = tokenURL[1];
            expireToken = Number(expireURL[1]);

            window.setTimeout(() => accessToken = '', expireToken * 1000);
            window.history.pushState('Access Token', '', '/');
            return;
        };

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = redirect;
    },

    search : (term) => {
        Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: {Authorization: `Bearer ${accessToken}`}
        })
            .then(response => response.json())
            .then(jsonResponse => {
                if (!jsonResponse) {
                    console.error('Response Error');
                };
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists,
                    album: track.album,
                    uri: track.uri
                }));
            });
    },

    save: (name, tracks) => {
        if (!name || !tracks) {
            return;
        };
        Spotify.getAccessToken();

        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', {
            method: "GET",
            headers: headers
        })
            .then(response => response.json())
            .then(jsonResponse => {
                userId = jsonResponse.id;
                let playlistId;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify({name: name})
                })
                    .then(response => response.json())
                    .then(jsonResponse => {
                        playlistId = jsonResponse.id;
                        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify({uris: tracks})
                        });
                    });
            });
    }
};

export default Spotify;