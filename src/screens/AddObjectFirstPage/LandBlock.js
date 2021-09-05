import React from "react";
import {View, Text,Dimensions, StyleSheet} from 'react-native';
import { TextArea, Stack } from "native-base";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import TestDropdown from "../AddObject/TestDropdown";
//const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const PARTITON_DATA = ["住宅區","商業區","工業區","倉庫區","倉庫區","一般農業區","特定農業區"];
const CATEGORY_DATA = ["住一","住二","住二之一","住二之二","住三","住三之一","住三之二"];


const LandBlock = ({tmpdata,setTmpdata}) => {
    const _onChangeValue = ({ nativeEvent}) => {
        if (!!setTmpdata || !!tmpdata) {
            setTmpdata({ ...tmpdata, '備註': nativeEvent.text });
        }
    }
    return (
        <>
        <View style={styles.container}>
            <FirstBlockEntry title="地段"></FirstBlockEntry>
            <FirstBlockEntry title="單價/坪"></FirstBlockEntry>
            <FirstBlockEntry title="面寬"></FirstBlockEntry>
            <FirstBlockEntry 
                title="使用分區" 
                input={
                    <TestDropdown datas = {PARTITON_DATA} width = {KEYINPUT_WIDTH/2} 
                    tmpdata={tmpdata} setTmpdata={setTmpdata} 
                    label = "使用分區" />} 
                needHr={0}
            />
            <FirstBlockEntry 
                title="使用類別" 
                input={
                    <TestDropdown datas = {CATEGORY_DATA} width = {KEYINPUT_WIDTH/2}
                    tmpdata={tmpdata} setTmpdata={setTmpdata}  
                    label = "使用類別"/>}
            />
            <FirstBlockEntry title="備註" needHr={0}></FirstBlockEntry>
            <Stack w="90%">                    
                <TextArea width={"90%"} h={40} margin={10} placeholder="請輸入物件其他訊息... (特色、鄰近學區、生活機能...等)" onChange={_onChangeValue}/>
            </Stack>
            <Text>{JSON.stringify(tmpdata)}</Text>
        </View>
        </>
    )
}

export default LandBlock;

const styles = StyleSheet.create({
    container:{
    }
})