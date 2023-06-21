import { useEffect, useState } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    cast: Cast[];
    movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, castPromiseResponse] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResponse.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};
