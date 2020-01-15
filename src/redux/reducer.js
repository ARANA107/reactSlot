import { AlbumsList } from '../shared/AlbumsList';

export const initialState = {
    albumsList: AlbumsList,
    play:false,
    showButton:false

};

export const Reducer = (state = initialState, action) => {
    return state;
};