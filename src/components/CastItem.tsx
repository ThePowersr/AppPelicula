import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast,
}

const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                        source={{ uri }}
                    />
                )
            }

            <View style={styles.marginInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};

export default CastItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
        marginHorizontal: 20,
        paddingRight: 15,
        height: 50,
    },
    marginInfo: {
        marginLeft: 10,
        marginTop: 2,
    },
});
