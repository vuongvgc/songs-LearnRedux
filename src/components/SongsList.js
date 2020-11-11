import React, { Component } from 'react';
import { connect } from 'react-redux';
class SongsList extends Component {
    render(){
        // props from mapStateToProps 
        console.log(this.props)
        return <div>SongsList</div>
    }
}

const mapStateToProps = (state)  => {
    console.log(state);
    //give state from store and it will props of SongList
    return state;
}

export default connect(mapStateToProps)(SongsList);