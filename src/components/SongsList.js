import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongsList extends Component {
    renderList() {
        return this.props.songs.map(item => {
            return (
                <div className="item" key={item.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(item)}>
                            Seclect
                        </button>
                    </div>
                    <div className="content">{item.title}</div>
                </div>
            )
        })
    }
    render(){
        // props from mapStateToProps 
        // console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state)  => {
    // console.log(state);
    //give state from store and it will props of SongList
    return state;
}

export default connect(mapStateToProps, {selectSong})(SongsList);