import {StyleSheet} from "react-native";
import colors from "../../../../res/colors";

export const styles = StyleSheet.create({
   icon: {
       position: 'absolute',
       top: '50%',
       right: 10,
       height: 40,
       width: 40,
       backgroundColor: colors.lightGrey,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 10
   }
});
