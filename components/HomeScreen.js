import React from 'react';
import { Button, View, Image } from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
        <View>
            <Button 
            title = "Go to G's Profile" 
            onPress={()=> navigate('Profile', {name: 'G'})}
        />
        <Image style={{width: 600, height: 350}} source={require('./company.jpg')} />
        </View>);
    }
}