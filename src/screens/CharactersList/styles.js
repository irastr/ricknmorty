import {StyleSheet} from 'react-native';
import colors from '../../res/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    upButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        height: 50,
        width: 50,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    upIcon: {
        color: colors.white
    }
});

export default styles;
