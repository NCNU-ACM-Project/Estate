import React,{useState} from "react";
import {Text,TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import KeyInput from "../AddObject/KeyInput";

import plate from "../../styles/plate";
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const AddObjectFillData = ({route,navigation})=>{

    const [tmpdata2,setTmp_data2] = useState({});
    const onPress = (navigation, route, all_data, setAll_data ) =>{
        setAll_data({...all_data,...tmpdata2});
        navigation.push(route,{all_data:all_data,setAll_data:setAll_data});
    }
    
    return(
        <>
        <Text>{JSON.stringify(route.params.all_data)}</Text>
        <FirstBlockEntry
            title="售物者" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="售物者"/>}
        />
        <FirstBlockEntry 
            title="電話1" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT} 
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="電話1" type="numeric"/>}/>
        <FirstBlockEntry 
            title="電話2" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="電話2" type="numeric"/>}/>
        <FirstBlockEntry 
            title="手機1" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="手機1" type="numeric" />}/>
        <FirstBlockEntry 
            title="手機2" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="手機2" type="numeric"/>}/>
        <FirstBlockEntry 
            title="電子信箱" 
            input={<KeyInput  width = {KEYINPUT_WIDTH} height = {HEIGHT}
            tmpdata={tmpdata2} setTmpdata={setTmp_data2}
            label="電子信箱" />}/>
        <Text>{JSON.stringify(tmpdata2)}</Text>        
        <TouchableOpacity style={styles.buttombtn} 
            onPress={()=>{onPress(navigation, 'addObjectShowData',route.params.all_data, route.params.setAll_data)}}               
        >
            <Text>下一步</Text>                
        </TouchableOpacity>
        </>
    )
}

export default AddObjectFillData;

const styles = StyleSheet.create({
    buttombtn:{
        position: "absolute",
        bottom: HEIGHT/2,
        width:"95%",
        height:HEIGHT,
        margin:10,
        paddingVertical:10,
        alignItems:"center",
        backgroundColor:plate.lightOrange,
        borderRadius: 2,
    }
})