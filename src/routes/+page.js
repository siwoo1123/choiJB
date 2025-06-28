export async function load({ fetch }) {
    try {
        const API_KEY = "AIzaSyAjVyhLDNZPxCAcxBQcqWFc9d7faW9UwuQ";
        const PLAYLIST_ID = "PLl0JM8tg37RSKqNt4P6W9r57VZNAYMzjy";
        const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}&maxResults=4`;

        let res = await fetch(URL);
        
        if (!res.ok) {
            throw new Error(`API Error: ${res.statusText}`);
        }
        
        let result = await res.json();
        
        // items 배열이 존재하는지 확인
        if (!result.items || !Array.isArray(result.items)) {
            console.warn('YouTube API response does not contain valid items array');
            return { videoList: [] };
        }
        
        let lalala = result.items;

        return { videoList: lalala };
    } catch (error) {
        console.error('Error loading video list:', error);
        return { videoList: [] };
    }
}
