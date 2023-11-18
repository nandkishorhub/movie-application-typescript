import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { InitialState, MovieOrShowDetails } from "../../interfaces/interfaces";
import { RootState } from "../store";
import { nestedMovieObj } from "../../interfaces/interfaces";

const initialState: InitialState = {
  movies: {},
  shows: {},
  movieOrShowDetail: {},
  movieStatus: "pending",
  showStatus: "pending",
};

export const fetchMoviesAsync = createAsyncThunk<nestedMovieObj, any>(
  "movies/fetchMoviesAsync",
  async (term: string, thunkAPI) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    console.log("term movies", term);
    return response.data;
  }
);

export const fetchShowsAsync = createAsyncThunk<nestedMovieObj, any>(
  "movies/fetchShowsAsync",
  async (term: string, thunkAPI) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchMovieOrShowDetailAsync = createAsyncThunk<
  nestedMovieObj,
  any
>("movies/fetchMovieOrShowDetailAsync", async (id, thunkAPI) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // here we have used normal reducer to reset/cleanup purpose
    // hence you can see below in all actions we have reset respctive data
    removeMovieOrShowDetail: (state) => {
      state.movieOrShowDetail = { Response: "", totalResults: "", Search: [] };
    },
    movieDetail: (state) => {
      state.movies = { Response: "", totalResults: "", Search: [] };
    },
    ShowDetail: (state) => {
      state.shows = { Response: "", totalResults: "", Search: [] };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMoviesAsync.pending, (state) => {
      state.movieStatus = "pending";
      return state;
    });
    builder.addCase(
      fetchMoviesAsync.fulfilled,
      (state, action: PayloadAction<nestedMovieObj>) => {
        state.movies = action.payload;
        state.movieStatus = "resolved";
        console.log("Res.......", action.payload);
        return state;
      }
    );
    builder.addCase(fetchMoviesAsync.rejected, (state) => {
      console.log("Rejected ", state.movies);
    });

    builder.addCase(fetchShowsAsync.pending, (state) => {
      state.showStatus = "pending";
      return state;
    });

    builder.addCase(
      fetchShowsAsync.fulfilled,
      (state, action: PayloadAction<nestedMovieObj>) => {
        state.showStatus = "resolved";
        state.shows = action.payload;
        return state;
      }
    );

    builder.addCase(
      fetchMovieOrShowDetailAsync.fulfilled,
      (state, action: PayloadAction<nestedMovieObj>) => {
        state.movieOrShowDetail = action.payload;
        return state;
      }
    );
  },
});

export const getAllMovies = (state: RootState): nestedMovieObj | {} => {
  return state.movies.movies;
};
export const getAllShows = (state: RootState): nestedMovieObj | {} =>
  state.movies.shows;
export const getMovieStatus = (state: RootState): string =>
  state.movies.movieStatus;
export const getShowsStatus = (state: RootState): string =>
  state.movies.showStatus;
export const getMovieOrShowDetails = (
  state: RootState
): MovieOrShowDetails | {} => state.movies.movieOrShowDetail;

export const { removeMovieOrShowDetail, movieDetail, ShowDetail } =
  movieSlice.actions;

export default movieSlice.reducer;
