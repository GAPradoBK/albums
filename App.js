import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
import { displayName as appName } from './app.json';

const App = () => (
    <View style={ { flex: 1 } }>
        <Header title={ appName } />
        <AlbumList/>
    </View>
);


export default App;