import {StyleSheet} from "react-native";
import colors from "../../res/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        // flexDirection: 'row'
        // flexWrap: 'wrap'
    },
    episodeTitle: {
        fontWeight: '700',
        fontSize: 30
    },
    episodeSubTitle: {
        fontSize: 18,
        fontWeight: '700'
    },
    episodeDate: {
        color: colors.grey,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: '70%',
        marginBottom: 10
    },
    item: {
        width: 200,
        height: 300,
        marginRight: 10,
        borderRadius: 15
    },
    itemText: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 20
        // position: 'absolute',
        // right: 0,
        // bottom: 0
    },
    itemSubText: {
        color: colors.grey
    },
    header: {
        fontWeight: '600'
    },
    headerText: {
        fontWeight: '600',
        marginBottom: 5
    },
    headerSubText: {
        color: colors.grey,
        fontWeight: '500'
    }
});
