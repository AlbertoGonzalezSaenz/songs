//Reducers

export const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I wat it that way', duration: '1:45' }
    ]
}

export const selectedSongReducer(selectedSong=null, action){
    if(action.type == 'SONG_SELECTED'){
        //RETURN SONG
        return action.payload
    }
    return selectedSong
}