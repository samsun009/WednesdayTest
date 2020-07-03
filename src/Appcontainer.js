import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Login from './comp/auth/Login';

import WednesdayTest from './comp/dash/WednesdayTest';

import styles from './conf/styles';
import colors from './conf/colors';
import config from './conf/config';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        });
    }

    async componentDidMount() {
        setTimeout(() => {
            this.isLoad()
        }, 3000);
    }

    isLoad = async () => {
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <SafeAreaView style={styles.splashContainer}>
                {/* <StatusBar backgroundColor={colors.statusBarColor} barStyle="light-content" /> */}
                {/* <Text style={styles.textbb20}>Splash Screen</Text> */}
                <Text style={styles.textbb20}>Wednesday Test</Text>
            </SafeAreaView>
        );
    }
}

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
    },
})

const AppStack = createStackNavigator({
    WednesdayTest: {
        screen: WednesdayTest,
    },
})

const AppContainer = createAppContainer(createSwitchNavigator({
    Splash: Splash,
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Splash',
}));

export default AppContainer;