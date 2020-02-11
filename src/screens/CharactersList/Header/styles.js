import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: 50,
        padding: 10,
        backgroundColor: `rgba(237,130,64, 1)`,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        height: 30,
        width: '100%',
        borderColor: '#ec9d6d',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: '#ec9d6d',
        paddingLeft: 40,
        color: '#333333'
    },
    icon: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: '50%',
        left: 20
    }
});
