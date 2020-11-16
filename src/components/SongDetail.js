import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    console.log(props);
    return (
        <div>SongDetail</div>
    )
}
const mapStateToProps = (state) => {
    return {song: state.songSelected}
}
export default connect(mapStateToProps)(SongDetail);