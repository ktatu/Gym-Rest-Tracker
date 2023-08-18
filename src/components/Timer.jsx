import { StyleSheet, TextInput, View } from "react-native"
import { useEffect, useState, useRef } from "react"
import Text from "./Text"
import TimerButton from "./TimerButton"
import TimerInput from "./TimerInput"

const Timer = ({ reduceSets }) => {
    const [duration, setDuration] = useState(90)
    const [durationRemaining, setDurationRemaining] = useState(duration)
    const [timerOn, setTimerOn] = useState(false)

    let intervalIdRef = useRef()

    useEffect(() => {
        if (durationRemaining === 0) {
            handleTimerStop()
        }
    }, [durationRemaining])

    const handleDurationChange = (newValue) => {
        try {
            const newDuration = parseFloat(newValue)
            if (newDuration > 0) {
                setDuration(newDuration)
            }
        } catch (error) {}
    }

    const handleTimerStart = () => {
        reduceSets()
        setTimerOn(true)

        intervalIdRef.current = setInterval(() => {
            setDurationRemaining((durationRemaining) => durationRemaining - 1)
        }, 1000)
    }

    const handleTimerStop = () => {
        clearInterval(intervalIdRef.current)
        setTimerOn(false)
        setDurationRemaining(duration)
    }

    return (
        <View style={styles.container}>
            <TimerInput
                submitDuration={handleDurationChange}
                duration={duration}
                durationRemaining={durationRemaining}
            />
            <Text>seconds</Text>
            <View style={styles.timerButtonContainer}>
                <TimerButton
                    handleTimerStart={handleTimerStart}
                    handleTimerStop={handleTimerStop}
                    timerOn={timerOn}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50,
        backgroundColor: "red",
        width: "100vw",
    },
    container: {
        alignItems: "center",
        display: "flex",
        justifyContent: "flex-end",
    },
    timerButtonContainer: {
        marginTop: 50,
    },
})

export default Timer
