import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

const DetailScreen = ({ route, navigation }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    console.log(cast);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color={"gray"} style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Boton para regresar */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}
            >
                <Icon
                    color="white"
                    name="arrow-back-circle-outline"
                    size={30}
                />
            </TouchableOpacity>

        </ScrollView>
    );
};

export default DetailScreen;


const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        paddingBottom: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10,

        elevation: 9,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    posterImage: {
        flex: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    backButton: {
        position: 'absolute',
        elevation: 9,
        top: 10,
        left: 5,
    },
});
