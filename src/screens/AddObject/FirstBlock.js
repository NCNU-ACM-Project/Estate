import React from 'react';
import {Text, View, Image ,StyleSheet, Dimensions,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import FirstBlokcEntry from "./FirstBlockEntry";
import KeyInput from "./KeyInput";
import ChooseDate from "../News/ChooseDate";
import Hr from "../../components/Hr";
import plate from '../../styles/plate';
import TestDropdown from "./TestDropdown";
import FirstBlockEntry from './FirstBlockEntry';
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;
const IMAGE_WIDTH = Math.floor(Dimensions.get("window").width/2)-20;

const PROPERTY_DATAS = ["出租","出售","分租","法拍","頂讓","成交"];
const Firstblock = ({tmpdata,setTmpdata}) =>{
    return(
        <>
            <View style = {styles.container}>
                <Text>{JSON.stringify(tmpdata)}</Text>
                <FirstBlokcEntry 
                    title = "物件名稱" 
                    input={<KeyInput style={styles.rightContainer} 
                    tmpdata={tmpdata} setTmpdata={setTmpdata}
                    label={"物件名稱"} width = {KEYINPUT_WIDTH} height = {HEIGHT} />}
                />
                <FirstBlockEntry title = "性質" input = {<TestDropdown
                    datas = {PROPERTY_DATAS}
                    tmpdata={tmpdata} setTmpdata={setTmpdata}
                    label={"性質"} width = {KEYINPUT_WIDTH/2}
                ></TestDropdown>}/>
                <View style={styles.img_external_container}>
                <Image
                source={{ uri: 'https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp', }}
                style={styles.imgcontainer} />
                <TouchableOpacity
                    style={[styles.imgcontainer, styles.plus_image_button]}
                    //onPress={()=>{上傳檔案，然後新增一格}}
                >                    
                {<AntDesign name="plus" size={IMAGE_WIDTH/2} color="black" />}
                </TouchableOpacity>
                </View>
                <Hr/>
                <FirstBlokcEntry title = "市調日" input={<ChooseDate/>} ></FirstBlokcEntry>
            </View>
        </>
    )
}
export default Firstblock;

const styles = StyleSheet.create({
    container:{
      flexDirection:'column',  
    },
    imgcontainer:{
        margin:10,
        marginVertical:20,
        width:IMAGE_WIDTH,
        height:IMAGE_WIDTH
    },
    img_external_container:{
        flexDirection:'row'
    },
    plus_image_button:{
        backgroundColor: plate.lightGray,
        paddingHorizontal:IMAGE_WIDTH/4,
        paddingVertical: IMAGE_WIDTH/4
    }    
})