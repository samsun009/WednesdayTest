/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import { Root } from 'native-base';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import AppContainer from './src/Appcontainer';

import styles from './src/conf/styles';
import colors from './src/conf/colors';
import config from './src/conf/config';

export default class App extends Component {

  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
