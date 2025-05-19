import { StyleSheet } from "react-native";
import colors from "./color";

const base = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
});

export default base;