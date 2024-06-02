import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/Colors";
import { FONTS } from '../../styles/Fonts';
import { SIZES } from '../../styles/Sizes';

export const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        height: 46
    },
    input: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.md,
        color: COLORS.black,
        flex: 1,
        marginLeft: 10,
    },
    rightIcon: {
        marginLeft: 'auto',
    },
    filter: {
        marginLeft: 'auto',
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
