import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import px,{px2dp} from 'react-native-px2dp';

/*輸入關鍵字*/
const KeyInput = (props) => {
    const [value, onChangeText] = React.useState('');
    return (
      <TextInput
        placeholder = {props.Placeholder}
        style={[styles.Text_input, {left: props.Left, top: props.Top}]}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    );
  }
export default KeyInput;

const styles = StyleSheet.create({
    Text_input: {
        position: 'absolute',
        borderRadius:5,
        width: 240*px, 
        height: 35*px, 
        borderColor: '#000000', 
        borderWidth: 1*px,
    },
});