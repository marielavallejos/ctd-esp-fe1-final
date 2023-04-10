import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Personaje } from "../../types/personaje.types"

interface initialType {
    personaje: Personaje[]
    favoritos: Personaje[]
    input: string,
    loading: boolean,
    error:string
}

const initialState: initialType = {
    personaje: [],
    favoritos: [],
    input: '',
    loading: false,
    error:''
}

/**
 * Función que realiza una petición a la API para obtener personajes por página
 * @function getPersonajes
 * @param {number} page Página de personajes de la API 
 * @returns {Promise<Personaje[]>} Lista de personajes
 */

export const getPersonajes = createAsyncThunk(
    'galeriaPersonajes',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

/**
 * Función que realiza una petición a la API para obtener la lista de personajes por nombre
 * @function getFiltrados
 * @param {string} name Nombre del personaje buscado
 * @returns {Promise<Personaje[]>} Lista de personajes por nombre
 */
export const getFiltrados= createAsyncThunk(
    'filtrados',
    async (name: string) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

const galSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        /**
         * Función que marca o desmarca un personaje como favorito
         * @function marcarFavorito
         * @param {initialType} state Estado actual 
         * @param {PayloadAction<Personaje>} action Acción que contiene el personaje que se desea marcar o desmarcar
        */
        marcarFavorito: (state, action) => {
            if(!state.favoritos.find(favorito => favorito.id === action.payload.id)){
                state.favoritos.push(action.payload);
            } else{
                state.favoritos = state.favoritos.filter(favorito => favorito.id !== action.payload.id);
            }
        },
        /**
         * Función que borra todos los personajes marcados como favoritos
         * @function borrarFavorito
         * @param {initialType} state Estado actual
         */
        borrarFavorito: (state) => {
            state.favoritos = initialState.favoritos;
        },
        
        buscarPersonaje: (state, action: PayloadAction<string>) => {
            state.input= action.payload
        },
        borrarFiltro: (state) => {
            state.input = initialState.input;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPersonajes.pending, (state) => {
                state.loading = true;
                state.personaje= initialState.personaje;
                state.error=initialState.error;
            })
            .addCase(getPersonajes.fulfilled, (state, action: PayloadAction<Personaje[]>) => {
                state.loading = false;
                state.personaje = action.payload;
                state.error=initialState.error;
            })
            .addCase(getPersonajes.rejected, (state, action) => {
                state.loading = false;
                state.personaje=initialState.personaje;
                state.error="No se econtraron personajes";
            })

            .addCase(getFiltrados.pending, (state) => {
                state.loading = true;
                state.personaje= initialState.personaje;
                state.error=initialState.error;
            })
            .addCase(getFiltrados.fulfilled, (state, action:  PayloadAction<Personaje[]>) => {
                state.loading = false;
                state.personaje = action.payload;
                state.error=initialState.error;
            })
            .addCase(getFiltrados.rejected, (state, action) => {
                state.loading = false;
                state.personaje=initialState.personaje;
                state.error="No se enonctró ningún personaje con ese nombre";
            })
    }
})

export const {marcarFavorito, borrarFavorito, buscarPersonaje, borrarFiltro} = galSlice.actions;
export default galSlice.reducer;