import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    active: {
        backgroundColor: '#FFFFFF',
        borderColor: 'transparent',
        color: '#242425'
    },
    filter: {
        height: 25,
        paddingHorizontal: 5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    filterText: {
        color: '#d0d0d0',
    },
    filterTextActive: {
        color: '#242425'
    }
});

export default styles;
