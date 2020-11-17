//TODO 5: component SongList
/**
 * Sử dụng connect để nhận state và dispatch từ store
 * mapStateToProps : để lấy current state và props cho component
 * dispatchToProps: gửi 1 hành động tới công compoent
 * hiển thị list ra màn hình sử dụng map và arr từ props
 * button khi onclick sẽ cử đi 1 cái hành động từ dispatch
 */
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
// store.getState(); store.disptach(selectionSong)