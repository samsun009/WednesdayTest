import React, { Component } from 'react';
import { View, KeyboardAvoidingView, SafeAreaView, Text, StatusBar, TextInput, TouchableOpacity } from "react-native";

import styles from '../../conf/styles';
import colors from '../../conf/colors';
import config from '../../conf/config';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Dash')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

}