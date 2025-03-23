export async function load({ fetch }) {
    try {
        const API_KEY = "AIzaSyAjVyhLDNZPxCAcxBQcqWFc9d7faW9UwuQ";
        const PLAYLIST_ID = "PLl0JM8tg37RSKqNt4P6W9r57VZNAYMzjy";
        const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}&maxResults=4`;

        let res = await fetch(URL);
        let result = await res.json();
        let lalala = result.items;

        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }

        return { videoList: lalala };
    } catch (error) {
        return { videoList: [] };
    }
}
