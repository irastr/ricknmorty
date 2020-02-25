import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    icon: {
        color: 'white',
    },
    placeholder: {
        position: 'absolute',
        left: 20,
        color: '#d0d0d0',
    },
    header: {
        height: 50,
        padding: 10,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        // borderColor: '#d0d0d0',
        // borderWidth: 1
    },
    input: {
        height: 30,
        width: '100%',
        borderColor: '#d0d0d0',
        marginHorizontal: 5,
        backgroundColor: '#F4F4F4',
        paddingLeft: 10,
        color: '#333333',
        borderBottomWidth: 2
    },
    iconSearch: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: '50%',
        left: 20
    },
    filtersWrap: {
        // marginLeft: 45,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'transparent'
    },
    filters: {
        flexDirection: 'row',
        marginBottom: 5
    },
    iconClose: {
        position: 'absolute',
        top: '50%',
        right: 20,
        borderWidth: 1,
        borderColor: 'black'
    },
    imgClose: {
        height: 40,
        width: 40
    },
    menuIcon: {
        color: '#242425',
        margin: 10
    },
    // menuIconWrap: {
    //     height: 30,
    //     width: 30,
    //     flex: 1
    // }
});
