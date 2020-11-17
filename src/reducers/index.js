// TODO 2: tạo 1 reducer function and combine lại
import { combineReducers } from 'redux';
//  Create Reducer function (currentState, action object) => sẽ quyết định là có update hay không
//Reducer function Song List 
/**
 *Function: songListReducer
 *Return: state mới 
 */ 
const songListReducer = () => {
    return [
        {title: "Faded", duration: "4.02"},
        {title: "Alone", duration: "3.02"},
        {title: "Sugar", duration: "5.02"},
        {title: "Goi Xoi Voi", duration: "1.02"}
    ]
}
// Reducer function song Selected
/**
 *Function: songSelectedReducer
 *Input: current state : songSelected , action object: 
 *Return: state mới or không có
 */ 
const songSelectedReducer = (songSelected = null, action) => {
    if(action.type === "SONG_SELECTED"){
        // return 1 object
        return  action.payload;
    }
    // không thay đổi
    return songSelected;
}
// combine nhiều reducer 
export default combineReducers({
    songs: songListReducer,
    songSelected: songSelectedReducer
});