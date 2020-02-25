import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemWrap: {
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 12,
        marginVertical: 5,
        marginHorizontal: 5,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        padding: 10,
        overflow: 'hidden'
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    title: {
        color: '#242425',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 5
    },
    textWrap: {
        flex: 1
    },
    subTitle: {
        color: '#D0D0D0',
        fontWeight: '500',
        fontSize: 16
    },
    active: {
        borderColor: '#7fcd91'
    },
    buttonWrap: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-end'
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#ed8240',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#ed8240',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginRight: 10,
        position: 'absolute'
    },
    buttonText: {
        color: '#FFFFFF'
    },
    left: {
        left: 60
    }
});
