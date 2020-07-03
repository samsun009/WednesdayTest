import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from './colors';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const BannerWidth = Dimensions.get('window').width - 32;
const BannerHeight = (Dimensions.get('window').height / 10) * 0.8;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.colorWhite,
        // paddingTop: Platform.OS == "ios" ? 28 : 0
    },
    spinnerTextStyle: {

        color: colors.colorPrimaryDark
    },
    darkContainer: {
        flex: 1,
        backgroundColor: colors.colorBackgroundDark,
    },
    warningView: {
        flexDirection: "row",
        backgroundColor: '#ffcccc',
        padding: 10
    },
    banner: {
        padding: 16,
        justifyContent: 'center',
        borderRadius: 6,
    },
    bannerimg: {
        width: BannerWidth,
        height: BannerHeight,
        borderRadius: 6,
        resizeMode: 'stretch',
        backgroundColor: colors.colorLightGray,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.3,
    },
    midContainer: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: 20,
        // paddingHorizontal: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    overlay: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 8,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },

    textboxRound: {
        marginHorizontal: 16,
        marginVertical: 16,
        paddingHorizontal: 8,
        flexDirection: 'row',
        backgroundColor: colors.colorBackgroundFaint,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderWidth: 0.3,
        borderColor: colors.colorGray
    },
    toggleView: {
        top: 0,
        marginBottom: 15,
        alignSelf: 'center',
    },
    toggle: {
        backgroundColor: colors.colorGray,
        marginTop: 0,
        marginBottom: 15,
        alignSelf: 'center',
        width: 50,
        height: 5,
        borderRadius: 30,
    },

    bottomTrans: {
        bottom: 0,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-around',
    },
    accentActiveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 120,
        height: 40,
        backgroundColor: colors.colorBackgroundFaint,
        borderColor: colors.colorLightGray,
        borderRadius: 5,
        borderWidth: 2,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    accentInActiveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 120,
        height: 40,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorAccentDark,
        borderRadius: 5,
        borderWidth: 2,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    headerBar: {
        backgroundColor: colors.colorPrimaryDark,
        color: colors.colorWhite,
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        paddingTop: 30,
    },
    headerBar1: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        paddingTop: 30,
    },
    teamUnderlineStyle: {
        height: 5,
        marginHorizontal: 2,
        width: 90,
        backgroundColor: colors.colorBlack,
    },
    loading: {
        flex: 1,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: "center"
    },
    centerText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    centerTextBall: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorLightGray,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    sectionListHeader: {
        marginTop: 10,
        padding: 8,
        paddingHorizontal: 15,
        backgroundColor: colors.colorBackgroundFaint,
    },
    sectionListHeaderFont: {

    },
    homeMatchTeamItem: {
        height: null,
        width: null,
        backgroundColor: colors.colorPrimaryDark,
    },
    optionView: {
        flexDirection: "row",
        height: 50,
        padding: 10,
        marginBottom: 1,
        backgroundColor: colors.colorBackground,
    },
    joinButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 30,
        borderColor: colors.colorPrimaryDark,
        borderRadius: 5,
        borderWidth: 0.6,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    contestButton: {
        backgroundColor: colors.colorBackground,
        borderRadius: 4,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    contestSelButton: {
        backgroundColor: colors.colorBackground,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.colorAccentDark,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 36,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
    },
    defaultButton: {
        borderColor: colors.colorLightGray,
        backgroundColor: colors.colorLightGray,
        borderRadius: 5,
        color: colors.colorBlack,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 40,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    primaryFullButton: {
        backgroundColor: colors.colorPrimaryDark,
        color: colors.colorWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 60,
    },
    accentFullButton: {
        backgroundColor: colors.colorAccentDark,
        color: colors.colorWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 60,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    priButton: {
        backgroundColor: colors.colorAccent,
        borderRadius: 4,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    secButton: {
        backgroundColor: colors.colorBackgroundFaint,
        borderRadius: 4,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },

    priFullButton: {
        backgroundColor: colors.colorAccent,
        borderRadius: 4,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    secFullButton: {
        backgroundColor: colors.colorBackgroundFaint,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    regButton: {
        backgroundColor: colors.colorWhite,
        borderRadius: 6,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 40,
        marginVertical: 10,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    secSmallButton: {
        borderColor: colors.colorPrimaryDark,
        backgroundColor: colors.colorBackgroundFaint,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 30,
        // margin: 10,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    accentOutlineSmallButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: 35,
        // padding: 10,
        borderColor: colors.colorAccentDark,
        borderRadius: 5,
        borderWidth: 1,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    smallButton: {
        borderColor: colors.colorPrimaryDark,
        backgroundColor: colors.colorPrimaryDark,
        borderRadius: 20,
        borderWidth: 1,
        color: colors.colorWhite,
        paddingVertical: 6,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: null,
        width: 160,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    smallGoButton: {
        backgroundColor: colors.colorPrimaryDark,
        borderRadius: 4,
        borderWidth: 0,
        height: null,
        width: 135,
        paddingVertical: 6,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    loginButton: {
        // flex: 1,
        borderColor: colors.colorPrimaryDark,
        backgroundColor: colors.colorBackground,
        borderRadius: 6,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: null,
        height: null,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 16,
    },
    // logoView: {
    //     width: 20,
    //     height: 20,
    //     // backgroundColor: colors.colorLightGray,
    //     justifyContent: 'center',
    //     alignSelf: 'center',
    // },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    logo: {
        width: 145,
        height: 145,
        resizeMode: "center",
    },
    opttext: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    amountButton: {
        borderColor: colors.colorAccentDark,
        borderRadius: 10,
        borderWidth: 1,
        color: colors.colorBlack,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: null,
        width: 80,
        elevation: 3,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    suchanaView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        padding: 10,
        margin: 10,
        marginHorizontal: 30,
        borderColor: colors.colorGreen,
        backgroundColor: colors.colorLightGray,
        borderWidth: 0.6,
        borderRadius: 6,
    },
    drawerContainer: {
        flex: 1,
        marginTop: deviceHeight / 6,
        padding: 10,
        marginHorizontal: 16,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    drawerContainerInn: {
        flex: 1,
        backgroundColor: colors.colorWhite,
        justifyContent: 'flex-end',
        borderRadius: 12,
    },
    modalInner: {
        height: null,
    },
    modalDownloadContainer: {
        height: (deviceHeight * 4) / 6,
        width: null,
        margin: 24,
        padding: 16,
        justifyContent: 'center',
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorAccentDark,
        borderRadius: 8,
        borderWidth: 0,
    },
    infoView: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.colorBackground,
    },
    liveScoreView: {
        height: null,
        padding: 15,
        backgroundColor: colors.colorBackgroundG,
    },
    liveScoreItem: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    overItemView: {
        flexDirection: "row",
        padding: 10,
        height: 90,
        marginBottom: 0.5,
        backgroundColor: colors.colorBackground,
    },
    overBall: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorLightGray,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    overRunBall: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorGray,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    overFourBall: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorSkyBlue,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    overSixBall: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorPurple,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    wicketBall: {
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.colorRed,
        margin: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    overBallView: {
        flexDirection: "row",
        padding: 16,
        marginBottom: 0.5,
        backgroundColor: colors.colorBackground,
    },
    overendView: {
        flexDirection: "row",
        padding: 10,
        marginBottom: 0.5,
        backgroundColor: colors.colorBackgroundAcc,
    },
    dropdwnView: {
        flexDirection: "row",
        padding: 10,
        height: 60,
        backgroundColor: colors.colorBackgroundFaint,
    },
    scorecardView: {
        flexDirection: "row",
        padding: 10,
        height: 60,
        marginBottom: 3,
        backgroundColor: colors.colorBackground,
    },
    textInput: {
        paddingHorizontal: 16,
        height: 50,
        // width: screenWidth - 50,
        borderColor: colors.colorPrimaryDark,
        borderWidth: 0.5,
        color: colors.colorPrimaryDark,
        padding: 10,
        // margin: 5,
        marginVertical: 10,
        marginHorizontal: 25,
        borderRadius: 5,
        backgroundColor: colors.colorBackgroundFaint,
    },
    buttonStyle: {
        padding: 20,
    },
    listItem: {
        flexDirection: 'row',
        height: 45,
        padding: 5,
        marginTop: 1,
        backgroundColor: colors.colorBackground
    },
    trueSeg: {
        padding: 25,
        backgroundColor: colors.colorPrimaryDark,
        borderColor: colors.colorPrimaryDark
    },
    falseSeg: {
        padding: 25,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorPrimaryDark
    },
    divider: {
        height: 5,
        backgroundColor: colors.colorBackgroundFaint,
    },
    poleline: {
        width: 0.6,
        backgroundColor: colors.colorUnderline,
    },
    underline: {
        height: 0.7,
        backgroundColor: colors.colorUnderline,
    },
    underlineFaint: {
        height: 0.2,
        backgroundColor: colors.colorUnderline,
    },
    underlineDark: {
        height: 0.7,
        backgroundColor: colors.colorUnderline,
    },
    underlineAccDark: {
        height: 0.7,
        backgroundColor: colors.colorAccentDark,
    },
    underlineAcc: {
        height: 0.7,
        backgroundColor: colors.colorAccentDark,
        marginHorizontal: 50,
        marginTop: 10
    },
    segmentTexttrue: {
        fontSize: 14,
        color: colors.colorWhite,
    },
    segmentTextfalse: {
        fontSize: 14,
        color: colors.colorPrimaryDark,
    },
    scoreBoard: {
        backgroundColor: colors.colorPrimaryDark,
        padding: 8,
    },
    overlayFlagView: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 1,
        borderColor: colors.colorLightGray,
        backgroundColor: colors.colorLightGray,
        resizeMode: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeFlagView: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderWidth: 1,
        borderColor: colors.colorLightGray,
        backgroundColor: colors.colorLightGray,
        resizeMode: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    withoutOverlayFlag: {
        width: 50,
        height: 50,
        resizeMode: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    linesupDot: {
        width: 6,
        height: 6,
        borderRadius: 6 / 2,
        backgroundColor: colors.colorGreen,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.colorPrimary,
        borderWidth: 0.4,
        margin: 1,
    },
    linesupRedDot: {
        width: 6,
        height: 6,
        borderRadius: 6 / 2,
        backgroundColor: colors.colorRed,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.colorPrimary,
        borderWidth: 0.4,
        margin: 1,
    },
    linesupText: {
        color: colors.colorGreen,
        fontSize: 10,
    },
    cardrow2: {
        // flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        height: null,
        width: null,
        paddingVertical: 2,
        backgroundColor: colors.colorPrimaryDark
    },
    touchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: colors.colorLightGray,
        borderRadius: 80,
    },
    CircleShapeView: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: colors.colorGray,
        borderWidth: 2,
        borderColor: colors.colorWhite,
        justifyContent: "center",
        alignItems: "center",
    },
    sportsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: colors.colorLightGray,
        borderRadius: 80,
    },
    buttoncard: {
        borderColor: colors.colorWhite,
        backgroundColor: colors.colorGray,
        borderRadius: 30 / 2,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30,
        margin: 10,
    },
    selectbuttoncard: {
        borderColor: colors.colorWhite,
        backgroundColor: colors.colorAccentDark,
        borderRadius: 30 / 2,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30,
        margin: 10,
    },
    namebuttoncard: {
        borderColor: colors.colorGray,
        backgroundColor: colors.colorGray,
        borderRadius: 30 / 2,
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 30,
    },
    contentHeaderItem: {
        padding: 20,
        height: null,
        width: null,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.colorBackground,
        // borderColor: colors.colorAccentDark,
        borderWidth: 0,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    loginCard: {
        margin: 16,
        padding: 16,
        borderRadius: 4,
        backgroundColor: colors.colorBackground,
        borderWidth: 0,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },

    followCard: {
        margin: 16,
        paddingBottom: 16,
        borderRadius: 4,
        backgroundColor: colors.colorBackground,
        borderWidth: 0,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },

    //headerbold
    textHeaderWhite: {

        fontSize: 12,
        color: colors.colorWhite,
    },
    textHeaderBlack: {

        fontSize: 12,
        color: colors.colorBlack,
    },

    //regular
    text4: {
        fontSize: 4,
        color: colors.colorBlack,
    },
    text6: {
        fontSize: 6,
        color: colors.colorBlack,
    },
    text8: {
        fontSize: 8,
        color: colors.colorBlack,
    },
    text10: {
        fontSize: 10,
        color: colors.colorBlack,
    },
    text12: {
        fontSize: 12,
        color: colors.colorBlack,
    },
    text14: {
        fontSize: 14,
        color: colors.colorBlack,
    },
    text16: { // 'Exo2-Bold',
        fontSize: 16,
        color: colors.colorBlack,
    },
    text18: {
        fontSize: 18,
        color: colors.colorBlack,
    },
    text20: {
        fontSize: 20,
        color: colors.colorBlack,
    },
    text22: {
        fontSize: 22,
        color: colors.colorBlack,
    },
    text24: {
        fontSize: 24,
        color: colors.colorBlack,
    },
    text26: {
        fontSize: 26,
        color: colors.colorBlack,
    },

    //white
    textw4: {
        fontSize: 4,
        color: colors.colorWhite,
    },
    textw6: {
        fontSize: 6,
        color: colors.colorWhite,
    },
    textw8: {
        fontSize: 8,
        color: colors.colorWhite,
    },
    textw10: {
        fontSize: 10,
        color: colors.colorWhite,
    },
    textw12: {
        fontSize: 12,
        color: colors.colorWhite,
    },
    textw14: {
        fontSize: 14,
        color: colors.colorWhite,
    },
    textw16: {
        fontSize: 16,
        color: colors.colorWhite,
    },
    textw18: {
        fontSize: 18,
        color: colors.colorWhite,
    },
    textw20: {
        fontSize: 20,
        color: colors.colorWhite,
    },
    textw28: {
        fontSize: 28,
        color: colors.colorWhite,
    },

    //bold black
    textbb4: {

        fontSize: 4,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb6: {

        fontSize: 6,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb8: {

        fontSize: 8,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb10: {

        fontSize: 10,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb12: {

        fontSize: 12,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb14: {

        fontSize: 14,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb16: {

        fontSize: 16,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb18: {

        fontSize: 18,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb20: {

        fontSize: 20,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb22: {

        fontSize: 22,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb24: {

        fontSize: 24,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },
    textbb26: {

        fontSize: 26,
        color: colors.colorBlack,
        fontWeight: 'bold',
    },


    //bold white
    textbw4: {

        fontSize: 4,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw6: {

        fontSize: 6,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw8: {

        fontSize: 8,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw10: {

        fontSize: 10,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw12: {

        fontSize: 12,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw14: {

        fontSize: 14,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw16: {

        fontSize: 16,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw18: {

        fontSize: 18,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw20: {

        fontSize: 20,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw22: {

        fontSize: 22,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw24: {

        fontSize: 24,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw26: {

        fontSize: 26,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },
    textbw28: {

        fontSize: 28,
        color: colors.colorWhite,
        fontWeight: 'bold',
    },

    touchSmallText: {
        fontSize: 10,
        color: colors.colorTouchText,
    },
    touchText: {
        fontSize: 14,
        color: colors.colorTouchText,
    },
    textteam: {
        fontSize: 14,
        color: colors.colorBlack,
    },

    //splash
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorWhite,
    },
    splashHeader: {
        fontSize: 24,
        marginTop: 200,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        color: colors.colorWhite,
    },

    //home
    homeViewpager: {
        margin: 10,
        height: 180,
        width: null,
        marginTop: 10,
        backgroundColor: colors.colorBackground,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    homeMatchespager: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: null,
        width: null,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorLightGray,
        borderRadius: 5,
        borderWidth: 0.3,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },

    recentPerformanceView: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: null,
        width: null,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorLightGray,
        borderRadius: 4,
        borderWidth: 0.3,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
    },

    teamspager: {
        margin: 12,
        height: null,
        width: null,
        backgroundColor: colors.colorBackground,
        borderColor: colors.colorLightGray,
        borderRadius: 5,
        borderWidth: 0.3,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    teamspagerUP: {
        height: null,
        width: null,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    homeDisMatchesPager: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: null,
        width: null,
        backgroundColor: colors.colorBackgroundFaint,
        borderColor: colors.colorLightGray,
        borderRadius: 5,
        borderWidth: 0.3,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    couponView: {
        height: null,
        width: null,
        borderStyle: 'dashed', //'dotted'
        position: 'relative',
        margin: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.colorGray,
    },
    linkView: {
        height: null,
        width: null,
        // borderStyle: 'dashed', //'dotted'
        position: 'relative',
        margin: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.colorGray,
    },
    homeNewsItem: {
        flex: 1,
        marginVertical: 10,
        padding: 5,
        height: 320,
        width: '100%',
        backgroundColor: colors.colorBackground,
    },
    homeNewsImg: {
        height: '95%',
        width: '100%',
        resizeMode: 'cover',
        backgroundColor: colors.colorLightGray,
    },
    homeShortNewsItem: {
        marginVertical: 10,
        padding: 5,
        height: 180,
        width: null,
        marginTop: 10,
        backgroundColor: colors.colorBackground,
    },
    homeShortNewsImg: {
        width: '95%',
        height: '95%',
        margin: 5,
        resizeMode: 'cover',
        backgroundColor: colors.colorLightGray,
    },

    homeContentsItem: {
        padding: 16,
        // height: (deviceHeight * 3) / 10,
        width: null,
        backgroundColor: colors.colorPrimaryDark,
    },

    homeBannerItem: {
        height: 180,
        width: null,
        backgroundColor: colors.colorWhite,
    },
    homeBannerImg: {
        // width: '100%',
        height: 180,
        width: '100%',
        // margin: 5,
        resizeMode: 'stretch',
        backgroundColor: colors.colorWhite,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
    },
    contestsView: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: null,
        width: null,
        backgroundColor: colors.colorBackground,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.colorLightGray,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    contestsViewUp: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    contestsViewMid: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingBottom: 5,
        // backgroundColor: colors.colorLightGray,
    },
    contestsViewDwn: {
        height: null,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    contestsListView: {
        justifyContent: 'space-around',
        marginVertical: 0.3,
        padding: 10,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: colors.colorBackgroundAcc,
    },
    contestsListUpView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.colorBackgroundAcc,
    },
    contestsListDownView: {
        justifyContent: 'center',
        padding: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: colors.colorBackgroundAcc,
    },
    userTeamItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.5,
        padding: 10,
        height: null,
        backgroundColor: colors.colorBackgroundAcc,
    },
    otherTeamItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.5,
        padding: 10,
        height: null,
        backgroundColor: colors.colorBackground,
    },
    previewTeamItem: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 0.5,
        margin: 5,
        height: null,
    },
    bottomItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.5,
        height: null,
    },
    circleView: {
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        backgroundColor: colors.colorBlack,
        justifyContent: "center",
        alignItems: "center",
    },
    circleView1: {
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    circleViewRed: {
        width: 6,
        height: 6,
        borderRadius: 6 / 2,
        backgroundColor: colors.colorRed,
        justifyContent: "center",
        alignItems: "center",
    },
    circleViewTrans: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        backgroundColor: colors.colorBackgroundFaint,
        justifyContent: "center",
        alignItems: "center",
        // resizeMode: 'center',
    },
    pointsDetailsView: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: (deviceHeight * 8.5) / 10,
        width: deviceWidth - 20,
        backgroundColor: colors.colorBackground,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.colorLightGray,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    pointsViewUp: {
        flex: 3,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },







    homefvViewpager: {
        margin: 10,
        height: 300,
        width: '80%',
        marginTop: 10,
        backgroundColor: colors.colorBackground,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    homefvLogoView: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    paginationContainer: {
        paddingVertical: 1,
    },
    paginationDot: {
        width: 7,
        height: 7,
        borderRadius: 10,
        // marginHorizontal: 2,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        height: 45,
        padding: 10,
        backgroundColor: colors.colorBackgroundFaint,
    },
    pointTableHeadView: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        backgroundColor: colors.colorBackgroundFaint,
    },
    pointTableView: {
        width: '100%',
        marginBottom: 15,
    },
    SquadsListItem: {
        flexDirection: 'row',
        height: 50,
        padding: 5,
        marginVertical: 0.5,
        backgroundColor: colors.colorBackground
    },
    playerSectionItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.5,
        padding: 10,
        height: null,
        backgroundColor: colors.colorBackground,
    },
    infoTab: {
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.colorBackground,
        paddingVertical: 8,
        margin: 0.5,
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        backgroundColor: colors.colorBackground,
        margin: 0.5,
    },

    appBarStyle: {
        backgroundColor: colors.colorPrimaryDark,
        color: colors.colorWhite,
        fontSize: 14
    },

    //matchestab
    tabview: {
        backgroundColor: colors.colorGray,
        height: null,
    },
    activetext: {
        // 
        color: colors.colorWhite,
        fontSize: 14,
    },
    inactivetext: {
        color: colors.colorBlack,
        fontSize: 14,
    },
    ltabinactive: {
        margin: 10,
        marginRight: 0,
        backgroundColor: colors.colorAccentFaint,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    ltabactive: {
        margin: 10,
        marginRight: 0,
        backgroundColor: colors.colorPrimary,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    tabinactive: {
        marginVertical: 10,
        margin: 0,
        backgroundColor: colors.colorAccentFaint,
    },
    tabactive: {
        marginVertical: 10,
        margin: 0,
        backgroundColor: colors.colorPrimary,
    },
    rtabinactive: {
        margin: 10,
        marginLeft: 0,
        backgroundColor: colors.colorAccentFaint,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    rtabactive: {
        margin: 10,
        marginLeft: 0,
        backgroundColor: colors.colorPrimary,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    tabunderline: {
        height: 0,
    },


    //selctiontabs

    segmentSelction: {
        backgroundColor: colors.colorBackgroundFaint
    },
    segmentTabSelction: {
        padding: 10,
        width: (deviceWidth * 2.5) / 10,
        height: 50,
        justifyContent: 'center'
    },

    tabBarView: {
        backgroundColor: colors.colorBackgroundFaint,
        height: null,
    },
    tabTransStyle: {
        backgroundColor: colors.colorBackgroundFaint,
    },
    activeTabTransStyle: {
        backgroundColor: colors.colorBackgroundFaint,
    },
    tabTransperentUnderlineStyle: {
        height: 1,
        backgroundColor: colors.colorAccentDark
    },
    tabBarUnderlineStyle: {
        height: 1,
        backgroundColor: colors.colorAccentDark
    },
    activeTextStyle: {
        color: colors.colorAccentDark,
        fontSize: 14,
    },
    tabTextStyle: {
        color: colors.colorBlack,
        fontSize: 14,
    },
    tabStyle: {
        backgroundColor: colors.colorBackground
    },
    activeTabStyle: {
        backgroundColor: colors.colorBackground
    },
    segmentView: {
        backgroundColor: colors.colorBackgroundFaint
    },
    segmentTab: {
        padding: 10,
        width: 100,
        justifyContent: 'center'
    },


    matchesSectionItem: {
        marginVertical: 5,
        padding: 10,
        height: 200,
        width: null,
        backgroundColor: colors.colorBackground,
    },

    scoresListItem: {
        margin: 10,
        padding: 10,
        height: 180,
        width: null,
        marginTop: 10,
        backgroundColor: colors.colorBackground,
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    scoresLogoView: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        resizeMode: 'contain',
        justifyContent: "center",
        alignItems: "center",
    },

    //Settings
    settingTitleView: {
        height: 50,
        padding: 15,
        backgroundColor: colors.colorBackgroundFaint,
    },
    settingTitle: {
        color: colors.colorPrimaryDark,
        fontSize: 14
    },
    settingsItemView: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.colorBackground,
    },
    settingsIconView: {
        flex: 1,
        padding: 5,
    },
    settingsNameView: {
        flex: 8,
        alignItems: 'flex-start',
    },


    unselectedPlayerView: {
        height: 70,
        width: null,
        backgroundColor: colors.colorWhite,
        elevation: 1,
        margin: 1,
    },
    selectedPlayerView: {
        height: 70,
        width: null,
        backgroundColor: colors.colorBackgroundAcc,
        elevation: 1,
        margin: 1,
    },
    addPlayerButton: {
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: colors.colorGreen,//'#4BB543',
        borderRadius: 50,
    },
    removePlayerButton: {
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: colors.colorAccentDark,
        borderRadius: 50,
    },
    unselectedRoundButton: {
        borderWidth: 2,
        borderColor: colors.colorBlack,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: colors.colorWhite,
        borderRadius: 50,
        // elevation: 1,
        margin: 5
    },
    selectedRoundButton: {
        borderWidth: 2,
        borderColor: colors.colorWhite,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: colors.colorBlack,
        borderColor: colors.colorWhite,
        borderRadius: 50,
        // elevation: 1,
        margin: 5
    },
    pagignationlabel: {
        fontSize: 12,
        height: 18,
        width: 18,
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.colorBlack,
    },
    pagignationSelectedlabel: {
        fontSize: 12,
        height: 18,
        width: 18,
        textAlign: "center",
        borderWidth: 1,
        borderColor: colors.colorWhite,
        color: colors.colorWhite,
        backgroundColor: colors.colorBlack,
    },
    confirmationlabel: {
        fontSize: 10,
        height: 16,
        width: 16,
        justifyContent: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: colors.colorBlack,
    },
    confirmationwinninglabel: {
        backgroundColor: "#519858",
        color: "white",
        height: 20,
        width: 20,
        borderRadius: 5,
        justifyContent: "center",
        textAlign: "center",
    },
    multipleteamslabel: {
        backgroundColor: "#17a2b8",
        color: "white",
        height: 20,
        width: 20,
        borderRadius: 5,
        justifyContent: "center",
        textAlign: "center",
    },
    accentBoxView: {
        backgroundColor: colors.colorWhite,
        borderColor: colors.colorAccentDark,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignContent: "center",
        // padding:10
        // height: 
    },
    greyBoxView: {
        backgroundColor: colors.colorWhite,
        borderColor: colors.colorGray,
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignContent: "center",
        // padding:10
        // height: 
    },







    onRadioRing: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        borderWidth: 2,
        borderColor: colors.colorAccentDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onRadioDot: {
        height: 16,
        width: 16,
        borderRadius: 16 / 2,
        backgroundColor: colors.colorAccentDark,
        backgroundColor: colors.colorAccentDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    offRadioRing: {
        height: 24,
        width: 24,
        borderRadius: 24 / 2,
        borderWidth: 2,
        borderColor: colors.colorAccentDark,
    },

    //otp
    borderStyleBase: {
        width: 35,
        height: 45,
    },
    borderStyleHighLighted: {
        borderColor: colors.colorPrimaryDark,
    },
    underlineStyleBase: {
        width: 35,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: colors.colorBlack,
    },
    underlineStyleHighLighted: {
        borderColor: colors.colorAccent,
    },

    //filter drawer

    container1: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: colors.colorBackgroundFaint,
        alignItems: 'center'
        // alignItems: "flex-start",
        // marginLeft: 40,
    },
    textmodal: {
        textAlign: 'center',

        color: colors.colorBlack,
        fontSize: 20,
        marginTop: 10,
    },
    textmodal1: {
        textAlign: 'left',

        color: colors.colorBlack,
        fontSize: 16,
    },
    subContainer: {
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
    },


    //chat

    msgCountButton: {
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: colors.colorGreen,//'#4BB543',
    },
    chatItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: null,
        backgroundColor: colors.colorBackgroundFaint,
    },
    progressBar: {
        width: '100%',
        transform: [{ scaleX: 1.0 }, { scaleY: 3 }],
    },
    progressBarContest: {
        width: '100%',
        transform: [{ scaleX: 1.0 }, { scaleY: 2 }],
    },




    scorepager: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: null,
        width: null,
        backgroundColor: colors.colorBackground,
        // height: null,
        // width: deviceWidth,
        // backgroundColor: colors.colorBackgroundFaint,
    },
    shirtStyle: {
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    teamevnt: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 8,
        backgroundColor: colors.colorBackgroundFaint,
    },
    infoevnt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.colorBackground,
    },

    remModalContainer: {
        flex: 1,
        backgroundColor: colors.colorBackdrop,
    },
    remdrawerContainer: {
        flex: 1,
        marginTop: (deviceHeight * 8) / 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    remdrawerContainerInn: {
        flex: 1,
        backgroundColor: colors.colorBackgroundFaint,
        justifyContent: 'flex-end',
        borderTopEndRadius: 12,
        borderTopStartRadius: 12,
    },
    remButton: {
        borderRadius: 4,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        paddingHorizontal: 12,
        paddingVertical: 4,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
    },
    followbutton: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    followbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderWidth: 0,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },


    overlayStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    customOverlayStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.colorWhite,
    },

    //wave progressbar
    wave: {
        width: null,
        height: 12,
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: colors.colorProgress,
    },
    progressbarview: {
        borderRadius: 6,
        backgroundColor: colors.colorProgressBack,
        marginTop: 5,
    },


    /////
    restCard: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginHorizontal: 8,
        marginVertical: 8,
        backgroundColor: colors.colorWhite,
        borderRadius: 1,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
        elevation: 5,
    },
    detailsCard: {
        flex: 1,
        padding: 16,
        margin: 16,
        marginTop: 8,
        backgroundColor: colors.colorWhite,
        borderRadius: 1,
        borderWidth: 0.3,
        borderColor: colors.colorLightGray,
        elevation: 5,
    },
    regularbtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.colorPrimaryDark,
        width: '90%',
        height: 35,
        margin: 8,
        borderWidth: 0,
        borderRadius: 4,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    imgView: {
        width: 220,
        height: 220,
        borderRadius: 8,
        borderWidth: 0.6,
        borderColor: colors.colorGray,
        backgroundColor: colors.colorLightGray,
        justifyContent: "center",
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    alertNoti: {
        padding: 16,
        margin: 16,
        borderRadius: 6,
        borderColor: colors.colorGray,
        borderWidth: 0.6
    },
    ModalContainer: {
        flex: 1,
        backgroundColor: colors.colorBackdrop,
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorBackdrop,
    },
    modalContainer: {
        backgroundColor: colors.colorBackgroundFaint,
        width: '85%',
        height: '80%',
        padding: 8,
        borderRadius: 4,
        borderWidth: 0.6,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    buttonShadow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.colorGray,
        borderRadius: 2,
        height: 30,
        width: 90,
        paddingHorizontal: 4,
        paddingVertical: 2,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
    },
    respItem: {
        flex: 0.5,
        height: 140,
        margin: 8,
        marginVertical: 14,
        padding: 8,
    },
    imageItem: {
        height: 100,
        borderRadius: 6,
        justifyContent: 'center',
        alignContent: 'center',
    },

    //profile
    minecard: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.colorPrimaryDark,
        padding: 16,
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        margin: 12,
        backgroundColor: colors.colorBackgroundFaint,
    },
    mineoptcard: {
        flexDirection: 'row',
        margin: 10,
        borderRadius: 5,
        elevation: 7,
        backgroundColor: colors.colorBackgroundFaint,
        padding: 10,
    },
    modalinvite: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 20,
        marginHorizontal: 25,
        borderRadius: 10,
        backgroundColor: colors.colorWhite,
    },
    addressBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50,
        backgroundColor: colors.colorPrimaryDark,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    qrinvite: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 30,
        backgroundColor: colors.colorWhite,

    },
    qrGoogle: {
        backgroundColor: colors.colorBackgroundFaint,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        padding: 20,
    },


    segtw: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.colorWhite,
    },
    segtb: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.colorBlack,
    },

})
export default styles;