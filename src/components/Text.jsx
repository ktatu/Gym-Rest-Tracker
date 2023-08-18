import { Text as NativeText, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 30,
    },
})

const Text = ({ children, style, props }) => {
    const textStyle = [styles.text, style]

    return (
        <NativeText
            style={textStyle}
            {...props}
        >
            {children}
        </NativeText>
    )
}

export default Text
