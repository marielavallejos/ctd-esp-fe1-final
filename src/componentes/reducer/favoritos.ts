import { createSlice } from "@reduxjs/toolkit"

interface Favoritos {
    id: number,
    favorite: boolean
}

interface initialType {
    favoritos: Favoritos[]

}

const initialState: initialType = {
    favoritos: []
}

const agregarFavoritos = createSlice({
    name: 'favoritos',
    initialState,
    reducers: {
        handleFavorito: (state, action) => {
            const {id, favorite} = action.payload;
            const favId = state.favoritos.findIndex((favorito) => favorito.id === action.payload )

            if (favId !== -1) {
                state.favoritos.splice(favId, 1);
            } else {
                state.favoritos.push({id: action.payload, favorite:true})

            }
        }
    },
})

export const {handleFavorito} = agregarFavoritos.actions;
export default agregarFavoritos.reducer