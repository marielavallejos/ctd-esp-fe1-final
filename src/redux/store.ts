import { configureStore} from "@reduxjs/toolkit";
import galSlice from '../componentes/reducers/galSlice'

export const store = configureStore({
   reducer: {
      personajes: galSlice,
   },
});



// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

