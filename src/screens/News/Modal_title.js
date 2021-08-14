import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import px from 'react-native-px2dp';

const ModalTitle=(props)=>{
    return(
        <View style={styles.filter_title}>
            <Text style={{fontSize:13*px}}>{props.Title}</Text>
        </View>
    );
}

export default ModalTitle;

const styles = StyleSheet.create({
    filter_title:{
        backgroundColor:'#FCEBCC',
        alignItems: 'center',
        justifyContent: 'center',
        height: 27*px,
        width: 204*px,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
});