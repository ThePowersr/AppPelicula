import { useEffect, useState } from 'react';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        const resps = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,
        });

        // const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
        // // const peliculas = resp.data.results;
        // setPeliculasEnCine(respNowPlaying.data.results);

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    };
};

export default useMovies;
