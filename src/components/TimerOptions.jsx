import { StyleSheet, TextInput, View } from "react-native"

const TimerOptions = ({ handleTextInputStatus }) => {
    return (
        <View style={styles.container}>
            <TextInput
                inputMode="numeric"
                onFocus={handleTextInputStatus}
                onBlur={handleTextInputStatus}
                placeholder="Rest duration"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 30,
    },
})

export default TimerOptions
