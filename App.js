import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Constants from "expo-constants"
import Text from "./src/components/Text"
import Timer from "./src/components/Timer"
import TimerOptions from "./src/components/TimerOptions"
import { useState } from "react"

export default function App() {
    const [setsRemaining, setSetsRemaining] = useState(5)
    const [textInputOpen, setTextInputOpen] = useState(false)

    const handleReduceSets = () => {
        if (setsRemaining === 0) {
            return
        }

        setSetsRemaining((setsRemaining) => setsRemaining - 1)
    }

    const handleTextInputStatus = () => {
        setTextInputOpen(!textInputOpen)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.setsText}>Sets remaining: {setsRemaining}</Text>
            <Timer
                reduceSets={handleReduceSets}
                textInputOpen={textInputOpen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#232429",
        display: "flex",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
        width: "100%",
    },
    setsText: {
        marginTop: 50,
        marginBottom: 50,
    },
})
