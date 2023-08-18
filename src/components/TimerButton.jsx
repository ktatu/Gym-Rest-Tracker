import { Pressable, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import Text from "./Text"

const TimerButton = ({ handleTimerStart, handleTimerStop, timerOn }) => {
    const timerIconProps = { size: 36, color: "white" }

    const endStyle = [styles.timerButton, styles.timerEnd]
    const startStyle = [styles.timerButton, styles.timerStart]

    if (!timerOn) {
        return (
            <Pressable
                style={startStyle}
                onPress={handleTimerStart}
            >
                <Text style={{ marginRight: 10 }}>Start</Text>
                <AntDesign
                    name="clockcircle"
                    {...timerIconProps}
                />
            </Pressable>
        )
    }

    return (
        <Pressable
            style={endStyle}
            onPress={handleTimerStop}
        >
            <Text style={{ marginRight: 10 }}>Stop</Text>
            <AntDesign
                name="closecircle"
                {...timerIconProps}
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

export default TimerButton
