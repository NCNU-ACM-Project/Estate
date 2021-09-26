import React from "react";
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import TestDropdown from "../AddObject/TestDropdown";
import Keyinput from "../AddObject/KeyInput";
import Hr from "../../components/Hr";
import { TextArea, Stack } from "native-base";

const HEIGHT =  Math.floor(Dimensions.get("window").height/15);
const WIDTH =  Math.floor(Dimensions.get("window").width);
const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const RIGHT_WIDTH = LEFT_TITLE_WIDTH*4;
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;

const CAR_DATA=["一樓平面","坡道平面","坡道機械","升降平面","升降機械","塔式機械"];
const PUERPOSE_DATA=["住宅","住宅","住宅","住宅","住宅"];
const CONTIES = ["台北市","基隆市","新北市","連江縣"];
const TOWNSHIP = ["1","2","3"];
const ROAD = ["1","2","3"];
const POSITION = ["東","南","西","北","東南","東北","西南","西北"];

const BulidingBlock = ({tmpdata,setTmpdata}) => {
    const _onChangeValue = ({ nativeEvent}) => {
        if (!!setTmpdata || !!tmpdata) {
            setTmpdata({ ...tmpdata, '備註': nativeEvent.text });
        }
    }
    return (
        <>
        <View>
            <View style={styles.entry_container}>
                <Text style = {styles.entry_left}>總樓高</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"總樓高_樓"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 樓 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 屋齡 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"總樓高_屋齡"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 年 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style={styles.entry_left}>地址</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>                        
                        <TestDropdown datas = {CONTIES} width = {KEYINPUT_WIDTH/2}
                            tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                            label = "地址_縣市" prompt = "縣市"
                            />                        
                        <TestDropdown datas = {TOWNSHIP} width = {KEYINPUT_WIDTH/2}
                            tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                            label = "地址_鄉鎮區" prompt = "鄉鎮區"
                            />
                    </View>
                    <View style={styles.entry_right_inside}>
                        <TestDropdown datas = {ROAD} width = {KEYINPUT_WIDTH}
                            tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                            label = "地址_路段/街" prompt = "路段/街"
                            />   
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style = {styles.entry_left}>門牌</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"門牌_巷"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 巷 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"門牌_弄"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 弄 </Text>
                    </View>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"門牌_之"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 之 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"門牌_號"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 號 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style={styles.entry_left}>建坪</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"建坪_坪"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 坪 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 地坪 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"建坪_地坪"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 坪 </Text>
                    </View>
                    <View style={styles.entry_right_inside}>
                        <Text>車位</Text>
                    </View>
                    <View style={styles.entry_right_inside}>
                    <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"建坪_車位_坪"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 坪 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"建坪_車位_萬"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 萬 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style = {styles.entry_left}>總價</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"總價_萬"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 萬 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 單價/坪 </Text>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"總價_單價/坪"} width = {KEYINPUT_WIDTH/3} height = {HEIGHT/2}
                        />
                        <Text> 萬 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <View style={styles.entry_container}>
                <Text style = {styles.entry_left}>格局</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Keyinput
                            tmpdata={tmpdata} setTmpdata={setTmpdata}
                            label={"格局_全部"} width = {KEYINPUT_WIDTH/2} height = {HEIGHT}
                            prompt={" 房/廳/衛/陽/車位"}
                        />
                        <View style={styles.verticleLine} /> 
                        <Text style={{textAlignVertical:"center"}}> 朝 </Text>
                        <TestDropdown datas = {POSITION} width = {KEYINPUT_WIDTH/2}
                            tmpdata={tmpdata} setTmpdata={setTmpdata} height = {HEIGHT}
                            label = "格局_面向" prompt = "面向"
                            />
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <FirstBlockEntry 
                title="車位型態" 
                input={<TestDropdown datas = {CAR_DATA} width = {KEYINPUT_WIDTH/2} 
                tmpdata={tmpdata} setTmpdata={setTmpdata} 
                label = "車位型態" 
                />}
            />
            <FirstBlockEntry 
                title="用途" 
                input={<TestDropdown datas = {PUERPOSE_DATA} width = {KEYINPUT_WIDTH/2}
                tmpdata={tmpdata} setTmpdata={setTmpdata} 
                label = "用途"  />}
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

export default BulidingBlock;

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