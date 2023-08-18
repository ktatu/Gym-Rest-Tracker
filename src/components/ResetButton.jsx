import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Text from "./Text"

const ResetButton = () => {
    return (
        <Pressable style={styles.timerButton}>
            <Text style={{ marginRight: 10 }}>Reset</Text>
            <Ionicons
                color="white"
                name="barbell"
                size={36}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    timerButton: {
        alignItems: "center",
        backgroundColor: "#485a9c",
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        padding: 20,
    },
    timerEnd: {
        backgroundColor: "#a1270b",
    },
    timerStart: {
        backgroundColor: "#485a9c",
    },
})

export default ResetButton
