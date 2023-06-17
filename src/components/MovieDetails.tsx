import React from 'react';
import { Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{}}>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name="star-outline"
                            color="grey"
                            size={16}
                        />
                        <Text> {movieFull.vote_average.toFixed(1)}</Text>
                        <Text style={{ marginLeft: 5 }}>
                            - {movieFull.genres.map(g => g.name).join(', ')}
                        </Text>
                    </View>

                    {/* Historia */}
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                        Historia
                    </Text>
                    <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                    {/* Presupuesto */}
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                        Presupuesto
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        {movieFull.budget > 0
                            ? currencyFormatter.format(movieFull.budget, { code: 'USD' })
                            : 'No hay presupuesto para la pelicula'}
                    </Text>
                </View>

                {/* Casting */}
                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color: 'black' }}>
                        Actores
                    </Text>
                    <FlatList
                        style={{ marginTop: 30, height: 70 }}
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </View>
        </>
    );
};

export default MovieDetails;
