import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import plate from '../../styles/plate';

/*輸入關鍵字*/
const KeyInput = (props) => {
    const [value, setValue] = React.useState(props.value);
    const onChangeText = (text) =>{
      //props.value = text;
      setValue(text);
      //setTmpdata({...tmpdata,[label]:text})
    }
    return (
      <TextInput
        placeholder = {props.prompt}
        style={[styles.Text_input, {width: props.width,height:props.height}]}
        onChangeText={onChangeText}
        onBlur={() => props.setTmpdata({...props.tmpdata,[props.label]:value})}
        value={value}
        placeholder= {(!props.prompt)? " 請輸入":props.prompt}
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