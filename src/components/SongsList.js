import React, { Component } from 'react';
import { connect } from 'react-redux';
class SongsList extends Component {
    render(){
        console.log(this.props)
        return <div>SongsList</div>
    }
}

const mapStateToProps = (state)  => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(SongsList);