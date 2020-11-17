// TODO 1: tạo 1 action creator function
/**
 *Function: selectSong
 *Return: action object với type and payload 
 */ 
// Action Creator  function
export const selectSong = (song) => {
    return {
        // action object 
        type: "SONG_SELECTED",
        payload: song
    }
}