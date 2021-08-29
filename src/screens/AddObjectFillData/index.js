import React from "react";
import {Text,TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import KeyInput from "../AddObject/KeyInput";

import plate from "../../styles/plate";
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const AddObjectFillData = ({navigation,props})=>{
    const onPress = (navigation, route) =>{
        navigation.navigate(route);
    }
    return(
        <>
        <FirstBlockEntry title="售屋者" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}/>}/>
        <FirstBlockEntry title="電話1" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="電話2" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="手機1" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric" />}/>
        <FirstBlockEntry title="手機2" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="電子信箱" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}/>}/>
        <TouchableOpacity style={styles.buttombtn} 
            onPress={()=>{onPress(navigation, 'addObjectShowData')}}               
        >
            <Text>下一步</Text>                
        </TouchableOpacity>
        </>
    )
}

export default AddObjectFillData;

const styles = StyleSheet.create({
    buttombtn:{
        height:HEIGHT,
        marginHorizontal:10,
        marginTop:10,
        paddingVertical:10,
        alignItems:"center",
        backgroundColor:plate.lightOrange,
        borderRadius: 2,
    }
})