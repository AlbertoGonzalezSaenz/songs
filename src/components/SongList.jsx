import React from 'react';
import { connect } from 'react-redux'
import Song from './Song';

const SongList = ({ songs }) => {
    const renderedSongs = songs.map(song => <Song key={song.title} {...song}/>)

    return (
        <div className="ui devided list">
            {renderedSongs}
        </div>
    );
}

const mapStateToProps = (state) => {

    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList);