import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import NormalText from "../../components/NormalText";

const LoginBtn = ({label, ...rest}) => {
    return (
        <TouchableOpacity {...rest} style={[styles.container, rest.style]}>
            <NormalText smaller={rest.smaller}>{label}</NormalText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgba(0,0,0, 0.6)",
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: "#FDF0C2"
    }
})

export default LoginBtn
