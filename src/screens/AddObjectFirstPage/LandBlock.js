import React from "react";
import {View, Text,Dimensions, StyleSheet} from 'react-native';
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import MyDropdown from "../AddObject/MyDropdown";

//const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const PARTITON_DATA = ["住宅區","商業區","工業區","倉庫區","倉庫區","一般農業區","特定農業區"];
const CATEGORY_DATA = ["住一","住二","住二之一","住二之二","住三","住三之一","住三之二"];
const LandBlock = () => {
    return (
        <>
        <View style={styles.container}>
            <FirstBlockEntry title="地段"></FirstBlockEntry>
            <FirstBlockEntry title="單價/坪"></FirstBlockEntry>
            <FirstBlockEntry title="面寬"></FirstBlockEntry>
            <FirstBlockEntry title="使用分區" input={<MyDropdown datas = {PARTITON_DATA} width = {KEYINPUT_WIDTH/2} height = {HEIGHT} prompt = {"請選擇"}/>} needHr={0}></FirstBlockEntry>
            <FirstBlockEntry title="使用類別" input={<MyDropdown datas = {CATEGORY_DATA} width = {KEYINPUT_WIDTH/2} height = {HEIGHT} prompt = {"請選擇"}/>}></FirstBlockEntry>
        </View>
        </>
    )
}

export default LandBlock;

const styles = StyleSheet.create({
    container:{

    }
})