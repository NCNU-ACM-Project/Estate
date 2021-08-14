import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Image} from 'react-native';
import px,{px2dp} from 'react-native-px2dp';


/*標題*/
const Top = (props) =>{
    return(
      <View style={styles.Top}>
        <Text style = {{color:"#000",fontSize: 20*px}} >{props.Title}</Text>
        <TouchableOpacity style = {{position: 'absolute', left: 16*px, top: 5*px}}>
            <Image source={{uri:"https://i.imgur.com/Wbbun9t.png"}} style = {{width: 45*px, height: 40*px}}/>
        </TouchableOpacity>
      </View>
    );
};
  
export default Top;

const styles = StyleSheet.create({
    Top: {
      position: 'absolute',
      backgroundColor:'rgba(238, 213, 176, 0.7)',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50*px,
      width: 360*px,
    },
});