import React from "react";
import {View, Text,Dimensions, StyleSheet} from 'react-native';
import { TextArea, Stack } from "native-base";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import TestDropdown from "../AddObject/TestDropdown";
import Keyinput from "../AddObject/KeyInput";
import Hr from "../../components/Hr";


const HEIGHT =  Math.floor(Dimensions.get("window").height/15);
const WIDTH =  Math.floor(Dimensions.get("window").width);
const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const RIGHT_WIDTH = LEFT_TITLE_WIDTH*4;
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;

const PARTITON_DATA = ["住宅區","商業區","工業區","倉庫區","倉庫區","一般農業區","特定農業區"];
const CATEGORY_DATA = ["住一","住二","住二之一","住二之二","住三","住三之一","住三之二"];
const CONTIES = ["台北市","基隆市","新北市","連江縣"];
const TOWNSHIP = ["1","2","3"];

const LandBlock = ({tmpdata,setTmpdata}) => {
    const _onChangeValue = ({ nativeEvent}) => {
        if (!!setTmpdata || !!tmpdata) {
            setTmpdata({ ...tmpdata, '備註': nativeEvent.text });
        }
    }
    return (
        <>
        <View style={styles.container}>
            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >地段</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <View >
                        <TestDropdown datas = {CONTIES} width = {KEYINPUT_WIDTH/2}
                        tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                        label = "地段_縣市" prompt = "縣市"
                        />
                        </View>
                        <View >
                        <TestDropdown datas = {TOWNSHIP} width = {KEYINPUT_WIDTH/2}
                        tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                        label = "地段_鄉鎮區" prompt = "鄉鎮區"
                        />
                        </View>
                    </View>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"地段_段"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 段 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"地段_小段"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 小段 </Text>
                    </View>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"地段_地號1"} width = {KEYINPUT_WIDTH/4} height = {HEIGHT/2}
                        />
                        <Text> - </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"地段_地號2"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 地號等 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"地段_筆"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 筆 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >土地</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"土地_坪"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 坪 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 總價 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"土地_總價"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 萬 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >單價/坪</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"單價/坪_萬"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 萬 </Text>
                        <View style={styles.verticleLine} />

                        <Text>臨路</Text>
                    </View>                
                    <View style={styles.entry_right}>
                        <View style={styles.entry_right_inside}>                        
                            <Text> 路寬 </Text>
                            <Keyinput
                                tmpdata={tmpdata} setTmpdata={setTmpdata}
                                label={"單價/坪_路寬"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                            />
                            <Text> 米 </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style = {styles.entry_left}>面寬</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"面寬_米"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 米 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 縱深 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"面寬_縱深"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 米 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
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
    entry_container:{
        flexDirection:'row',
        justifyContent:'space-evenly'
        //width: WIDTH,
    },
    entry_left:{
        textAlign: 'center',
        width: LEFT_TITLE_WIDTH,
        paddingVertical: 10,
        marginHorizontal:10,
    },
    entry_right:{
        width: RIGHT_WIDTH,
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    entry_right_inside :{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    verticleLine: {
        display: "flex",
        alignSelf: "stretch",
        margin: 3,
        width: 1,
        backgroundColor: "#000",
      },
})