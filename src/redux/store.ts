import { configureStore} from "@reduxjs/toolkit";
import galSlice from '../componentes/reducer/galSlice'
import agregarFavoritos from "../componentes/reducer/favoritos";

export const store = configureStore({
   reducer: {
      personajes: galSlice,
      favoritos: agregarFavoritos
   },
});



// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

