import {StyleSheet} from "react-native";
import colors from '../../res/colors'

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;

export const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // width: null,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 30,
        color: colors.black,
        fontWeight: '700'
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    subTitle: {
        color: colors.grey,
        fontWeight: '700',
        fontSize: 18
    },
    header: {
        position: 'absolute',
        backgroundColor: colors.pink,
        justifyContent: 'center',
        minHeight: HEADER_MIN_HEIGHT,
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    },
    textWrap: {
        padding: 10,
        marginTop: HEADER_MAX_HEIGHT,
        alignItems: 'flex-end'
    },
    //TABS
    tab: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: colors.lightGrey,
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    tabWrap: {
        flexDirection: 'row',
        marginBottom: 10

    },
    tabText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.grey,
    },
    activeTab: {
        borderBottomColor: colors.black
    },
    tabTextActive: {
        color: colors.black
    },
    item: {
        borderRadius: 2,
        marginVertical: 5,
        marginHorizontal: 7,
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.2,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    episodeTitle: {
        fontWeight: '600'
    },
    episodeSubTitle: {
       color: colors.grey
    },
    listHeader: {
        backgroundColor: '#FFFFFF'
    }
});
