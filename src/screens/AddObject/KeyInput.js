import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import plate from '../../styles/plate';

/*輸入關鍵字*/
const KeyInput = (props) => {
    const [value, onChangeText] = React.useState('');
    return (
      <TextInput
        placeholder = {props.prompt}
        style={[styles.Text_input, {width: props.width,height:props.height}]}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder= {props.prompt}
        keyboardType = {props.type} //"numeric 數字鍵盤"
      />
    );
  }
export default KeyInput;

const styles = StyleSheet.create({
    Text_input: {
        borderRadius:5,
        backgroundColor: plate.lightGray,
    },
});