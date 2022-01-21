// Action Creator

export const selectSong =() => {
    //retrun action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}