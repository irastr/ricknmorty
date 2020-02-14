import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    itemWrap: {
        borderColor: 'transparent',
        borderWidth: 2,
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
        color: '#ed8240',
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 5
    },
    textWrap: {
        flex: 1
    },
    subTitle: {
        color: '#333333',
        fontWeight: '500',
        fontSize: 12
    },
    active: {
        borderColor: `rgba(237, 130, 64, 1)`
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
