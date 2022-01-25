import React from 'react';
import { connect } from 'react-redux'
import { selectSong } from '../actions';
import Song from './Song';

const SongList = ({ songs, selectSong }) => {
    const renderedSongs = songs.map(song => <Song key={song.title} song={song} selectSong={selectSong}/>)

    return (
        <div className="ui devided list">
            {renderedSongs}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList);