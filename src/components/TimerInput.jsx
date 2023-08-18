import { useState } from "react"
import { StyleSheet, TextInput } from "react-native"
import Text from "./Text"

const TimerInput = ({ duration, durationRemaining, submitDuration }) => {
    const [textInputFocused, setTextInputFocused] = useState(false)

    return (
        <TextInput
            inputMode="numeric"
            onBlur={() => setTextInputFocused(false)}
            onFocus={() => setTextInputFocused(true)}
            onSubmitEditing={({ nativeEvent }) => submitDuration(nativeEvent.text)}
            style={styles.timerInput}
            textAlign="center"
        >
            <Text style={styles.timerNumber}>
                {textInputFocused ? duration : durationRemaining}
            </Text>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    timerInput: {
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 5,
        minHeight: 150,
        minWidth: 150,
        paddingLeft: 10,
        paddingRight: 10,
    },
    timerNumber: {
        fontSize: 100,
    },
})

export default TimerInput
