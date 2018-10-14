import React from 'react';
import { View, Linking, Image, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Album = ( props ) =>  (

    <Card>

        <CardSection>
            <View style={ styles.thumbnailContainer } >
                <Image
                    style={ styles.thumbnail }
                    source={ { uri: props.album.thumbnail_image } } />
            </View>
            <View style={ styles.headerContainer }>
                <Text style={ styles.albumTitle } > { props.album.title } </Text>
                <Text> { props.album.artist } </Text>
            </View>
        </CardSection>

        <CardSection>
            <Image
                style={ styles.albumImage }
                source={ { uri: props.album.image } } />
        </CardSection>

        <CardSection>
            <Button onPress={ () => Linking.openURL( props.album.url ) } >
                Buy Now!
            </Button>
        </CardSection>

    </Card>

);

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    albumTitle: {
      fontSize: 18
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default Album;