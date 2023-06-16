/* eslint-disable react-native/no-inline-styles */
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowsWidth } = Dimensions.get('window');


const HomeScreen = () => {

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();

    // console.log(peliculasEnCine);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }

    return (
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
                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalSlider title={'Popular'} movies={popular} />
                <HorizontalSlider title={'Top Rated'} movies={topRated} />
                <HorizontalSlider title={'Upcoming'} movies={upcoming} />

            </View>
        </ScrollView>
    );
};

export default HomeScreen;
