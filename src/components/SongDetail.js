//TODO 6: component SongSelected
/**
 * Sử dụng connect để nhận state  store
 * mapStateToProps : để lấy current state và props cho component
 * hiển thị chi tiết ra màn hình khi lấy object từ props nhận được
 */
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( { mySelectedSong } ) => {
    // console.log(props.mySelectedSong.title);
    if(!mySelectedSong){
        return (
            <div>Select Song</div>
        )
    }
    return (
        <div>
            <h3>Song Detail:</h3>
            <p>Title: {mySelectedSong.title}</p>
            <p>Duration: {mySelectedSong.duration}</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {mySelectedSong: state.songSelected}
}
export default connect(mapStateToProps)(SongDetail);

//NOTE connect(mapStateToProps)(SongDetail) same Store.getState()