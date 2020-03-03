import {StyleSheet} from "react-native";
import colors from "../../../../res/colors";

export const styles = StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 20
    },
    headerExpanded: {
        borderRadius: 0,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    }

});
