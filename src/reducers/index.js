import { combineReducers } from 'redux';
//Reducer Song List
const songListReducer = () => {
    return [
        {title: "Faded", duration: "4.02"},
        {title: "Alone", duration: "3.02"},
        {title: "Sugar", duration: "5.02"},
        {title: "Goi Xoi Voi", duration: "1.02"}
    ]
}
// Reducer song Selected
const songSelectedReducer = (songSelected = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return  action.payload;
    }
    return songSelected;
}
export default combineReducers({
    songs: songListReducer,
    songSelected: songSelectedReducer
});