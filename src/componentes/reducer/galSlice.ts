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
    personaje: Personaje[]
    pagina:number,
    loading: boolean

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
    personaje: [],
    pagina:1,
    loading: false,
}

const galSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: { },
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

export default galSlice.reducer;