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

export const getPersonajes = createAsyncThunk(
    'galeriaPersonajes',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

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
        marcarFavorito: (state, action) => {
            if(!state.favoritos.find(favorito => favorito.id === action.payload.id)){
                state.favoritos.push(action.payload);
            } else{
                state.favoritos = state.favoritos.filter(favorito => favorito.id !== action.payload.id);
            }
        },
        borrarFavorito: (state) => {
            state.favoritos = initialState.favoritos;
        },

        //Filtro 
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