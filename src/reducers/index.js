import { combineReducer } from 'react-redux';
//Reducer Song List
const songListReducer = () => {
    return [
        {song: "Faded", duration: "4.02"},
        {song: "Alone", duration: "3.02"},
        {song: "Sugar", duration: "5.02"},
        {song: "Goi Xoi Voi", duration: "1.02"}
    ]
}
// Reducer song Selected
const songSelectedReducer = (songSelected = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return  action.payload;
    }
    return songSelected;
}
combineReducer({
    songs: songListReducer,
    songSelected: songSelectedReducer
})