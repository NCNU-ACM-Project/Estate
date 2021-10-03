import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const SubmitBtn = ({label, ...rest}) => {
    return (
        <TouchableOpacity style={styles.container} {...rest} >
            <Text style={styles.label}> {label} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFCB2",
        padding: 10,
    }, label: {
        textAlign: "center",
        fontSize: 20,
    }
})

export default SubmitBtn
