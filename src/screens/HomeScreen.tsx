/* eslint-disable react-native/no-inline-styles */
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';

const { width: windowsWidth } = Dimensions.get('window');


const HomeScreen = () => {

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const colors = await ImageColors.getColors(uri, {});


        console.log(colors);
    };

    // console.log(peliculasEnCine);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* Carosel principal */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowsWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>

                    {/* Peliculas populares */}
                    <HorizontalSlider title={'Popular'} movies={popular} />
                    <HorizontalSlider title={'Top Rated'} movies={topRated} />
                    <HorizontalSlider title={'Upcoming'} movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>
    );
};

export default HomeScreen;
