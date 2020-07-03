import React, { Component } from 'react';
import { View, StatusBar, FlatList, SafeAreaView, Text, ImageBackground, Image, Modal, TouchableOpacity } from "react-native";

import styles from '../../conf/styles';
import colors from '../../conf/colors';
import config from '../../conf/config';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SearchBar from 'react-native-search-bar';

export default class WednesdayTest extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            serchItem: '',
            Visible: false,
            results: [],
            resultCount: '',
        })
    }

    componentDidMount() {
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
            // title: 'Wednesday Test',
            // headerTintColor: colors.colorWhite,
            // headerStyle: {
            //     backgroundColor: colors.colorPrimaryDark,
            // },
        };
    };

    getResult = async (item) => {
        console.log(item);
        fetch(config.BASE_URL + item, {
            method: 'GET',
            headers: {
                // 'Authorization': 'Bearer ' + value,
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((res) => {
                console.log('top-headlines res', JSON.stringify(res));
                this.setState({ results: res.results, resultCount: res.resultCount })
            })
            .catch((error) => {
                // closeOverlay()
                pojo.errorToast(config.catcherror);
            });

    }

    renderItem = ({ item, index }) => {
        console.log(item);
        return (
            <TouchableOpacity
                style={styles.respItem}
            // onPress={() => this.onSelect(item)}
            >
                <Image
                    style={styles.imageItem}
                    source={{ uri: item.artworkUrl100 }}
                >
                </Image>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
                    <Text numberOfLines={1} style={styles.textbb12}>{item.trackName}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 2 }}>
                    <Text numberOfLines={1} style={styles.text12}>{item.artistName}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    onAction() {
        this.setState({ Visible: true });
    }

    render() {

        return (
            <SafeAreaView style={styles.Container}>
                <StatusBar backgroundColor={colors.colorWhite} barStyle="dark-content" />

                <SearchBar
                    ref="searchBar"
                    placeholder="Music, Artists"
                    onChangeText={(text) => { this.setState({ serchItem: text }); this.getResult(text) }}
                    onSearchButtonPress={(text) => { this.setState({ serchItem: text }); this.getResult(text) }}
                />

                <FlatList
                    data={this.state.results}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    numColumns={2}
                    ListHeaderComponent={() => (!this.state.results ?
                        <View style={styles.loading}>
                            {/* <ActivityIndicator size="large" color={colors.colorPrimaryDark} /> */}
                            <Text style={styles.text22}>Search you want to hear</Text>
                        </View>
                        : null)}
                />

            </SafeAreaView>
        );
    }

}