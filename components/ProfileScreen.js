import React from 'react';
import { View, Button, Text, Image } from 'react-native';

export class ProfileScreen extends React.Component {
    static navigateOptions = {
        title : 'Profile'
    };

    constructor(props){
        super(props);

        this.state = {
            dialogOpen: false
        };

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    openDialog() {
        this.setState({
            dialogOpen: true
        });
    }
    
    closeDialog() {
        this.setState({
            dialogOpen: false
        });
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Image style={{width: 400, height: 400}} source={require('./profilepic.png')} />
                <Button title='Go Back' onPress={()=> navigate('Home')}></Button>
            </View>
        );
    }
}