import { configureStore, PreloadedState, combineReducers} from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";

const rootReducer = combineReducers({
  movies: movieReducer
})


export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

 
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
