import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


interface Personaje {
    id: number,
    name: string,
    gender: string,
    image: string,
    origin: object,
    url:string,
    esFavorito: boolean,
}

interface initialType {
    value: string,
    personaje: Personaje[]
    favoritos: Personaje[]
    pagina:number,
    loading: boolean,
    error:boolean


}

export const getPersonajes = createAsyncThunk(
    'personajes',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const parseRes = await res.json()
        return parseRes.results
    }
)

const initialState: initialType = {
    value: "",
    personaje: [],
    favoritos: [],
    pagina:1,
    loading: false,
    error:false
}

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
        // Para boton test
        borrarFavorito: (state) => {
            state.favoritos = initialState.favoritos;
        },

        //Filtro por nombre
        busqueda: (state, action) => {
            state.value= action.payload
        },
        limpiarFiltro: (state, action) => {
            state.value = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPersonajes.pending, (state) => {
                state.loading = true
            })
            .addCase(getPersonajes.fulfilled, (state, action) => {
                state.loading = false
                state.personaje = action.payload;
            })
            .addCase(getPersonajes.rejected, (state, action) => {
                state.loading = false
            })

    }
})

export const {marcarFavorito, borrarFavorito} = galSlice.actions;
export default galSlice.reducer;