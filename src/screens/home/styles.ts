import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../styles";

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        justifyContent: 'space-between'
    },
    searchBtn: {
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.2,
        marginLeft: 8
    },
    searchText: {
        color: COLORS.black
    },
    table: {
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        marginBottom: 10,
        padding: 16,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        padding: 5,
        fontFamily: FONTS.regular,
        fontSize: SIZES.md,
    },
    header: {
        flex: 1,
        borderWidth: 1,
        padding: 5,
        borderColor: COLORS.darkGray,
        fontFamily: FONTS.bold,
        fontSize: SIZES.md,
        color: COLORS.white,
        textAlign: 'center',
    }
})