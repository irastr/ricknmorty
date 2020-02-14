import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
    }
});
