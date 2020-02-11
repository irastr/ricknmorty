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
        padding: 10
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
    }
});
