import React, { Component } from 'react';
import { Platform } from "react-native";
import { Toast } from 'native-base';


export default class pojo extends Component {
    constructor(props) {
        super(props);
        this.state = ({
        })
    }


    timetotimeconvert = (timestamp) => {
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var date = new Date(timestamp);//localTime
        // Year
        var year = date.getFullYear();
        // Month
        var month = months_arr[date.getMonth()];
        // Day
        var day = date.getDate();
        // Hours
        var hours = date.getHours();
        // Minutes
        var minutes = date.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var replacement = hours + ":" + minutes;
        var convdataTime = day + ', ' + month + ' ' + year// + '  ' + replacement;
        // console.log('convdataTime ', convdataTime);
        return convdataTime;
    }

    successToast = (text) => {
        Toast.show({
            text: text,
            type: "success",
            position: "bottom",
            duration: 3000
        })
    }

    errorToast = (error) => {
        Toast.show({
            text: error,
            type: "danger",
            position: "bottom", // bottom
            duration: 3000
        })
    }

    warningToast = (text) => {
        Toast.show({
            text: text,
            type: "warning",
            position: "bottom",
            duration: 3000
        })
    }

    CheckConnectivity = () => {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                return true;
            } else {
                return false;
            }
        })
    };

    validPassword(fieldName, min, max) {
        schema = new passwordValidator();
        schema
            .is().min(min)                                    // Minimum length 6
            .is().max(max)                                  // Maximum length 15
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits()
            // .has().symbols()                                 // Must have digits
            .has().not().spaces()                           // Should not have spaces
            .is().not().oneOf(['Passw0rd', 'Password123']);
        return schema.validate(fieldName);
    }

    createStar = (mainStr) => {
        // var mainStr = '1234567891234567';
        var vis = mainStr.slice(-4);
        var countNum = '';
        var result = '';

        for (var i = (mainStr.length) - 4; i > 0; i--) {
            countNum += '*';
        }
        result = countNum + vis;
        return result;
    }

    decodeURIComponentSafe(uri, mod) {
        var out = new String(),
            arr,
            i = 0,
            l,
            x;
        typeof mod === "undefined" ? mod = 0 : 0;
        arr = uri.split(/(%(?:d0|d1)%.{2})/);
        for (l = arr.length; i < l; i++) {
            try {
                x = decodeURIComponent(arr[i]);
            } catch (e) {
                x = mod ? arr[i].replace(/%(?!\d+)/g, '%25') : arr[i];
            }
            out += x;
        }
        return out;
    }

    saveAsynch = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            // saving error
        }
    }

    getAsynch = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)
            if (value != null) {
                return value;
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    }
}