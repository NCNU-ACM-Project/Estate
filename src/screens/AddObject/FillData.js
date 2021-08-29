import React from "react";
import {Dimensions} from "react-native";
import FirstBlockEntry from "./FirstBlockEntry";
import KeyInput from "./KeyInput";

const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const FillData = ()=>{
    return(
        <>
        <FirstBlockEntry title="售屋者" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}/>}/>
        <FirstBlockEntry title="電話1" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="電話2" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="手機1" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="手機2" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} type="numeric"/>}/>
        <FirstBlockEntry title="電子信箱" input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}/>}/>
        </>
    )
}

export default FillData;