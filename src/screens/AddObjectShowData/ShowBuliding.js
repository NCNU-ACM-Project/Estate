import React, {useState} from "react";
import {View, Text,Dimensions, StyleSheet} from 'react-native';
import { TextArea, Stack } from "native-base";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import Hr from "../../components/Hr";


const HEIGHT =  Math.floor(Dimensions.get("window").height/15);
const WIDTH =  Math.floor(Dimensions.get("window").width);
const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const RIGHT_WIDTH = LEFT_TITLE_WIDTH*4;
const KEYINPUT_WIDTH = Math.floor(Dimensions.get("window").width/5)*3;

const ShowBuilding = ({all_data}) => {
    const [roadname, setRoadname] = useState("");
    //deal_road_name({all_data,roadname, setRoadname}); useEffect
    //setRoadname(all_data["地段_縣市"] + " "+ all_data["地段_鄉鎮區"] );
    return (
        <>
        {/* <Text>{roadname}fff</Text> */}
        {/* <FirstBlockEntry title="總樓高" input = {all_data["總樓高_樓"]}/> */}
        <View style={styles.container}>           
            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >總樓高</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["總樓高_樓"]}</Text>
                        <Text> 樓 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 屋 齡 </Text>
                        <Text>{all_data["總樓高_屋齡"]}</Text>
                        <Text> 年 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>

            <FirstBlockEntry title="地址" input = {all_data["地址_縣市"]}/> 
            <FirstBlockEntry title="門牌" input = {all_data["門牌_巷"]}/> 

            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >建坪</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["建坪_坪"]}</Text>
                        <Text> 坪 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 地 坪 </Text>
                        <Text>{all_data["建坪_地坪"]}</Text>
                        <Text> 坪 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>

            <FirstBlockEntry title="車位" input = {all_data["建坪_車位_坪"]}/>

            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >總 價</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["總價_萬"]}</Text>
                        <Text> 萬 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 單價/坪 </Text>
                        <Text>{all_data["總價_單價/坪"]}</Text>
                        <Text> 萬 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>

            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >格局</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["格局_全部"]}</Text>
                        <View style={styles.verticleLine} />
                        <Text> 朝 </Text>
                        <Text>{all_data["格局_面向"]}</Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>

            <FirstBlockEntry title="車位型態" needHr={0} input={all_data["車位型態"]}></FirstBlockEntry>
            <FirstBlockEntry title="用途" needHr={0} input={all_data["用途"]}></FirstBlockEntry>
            <FirstBlockEntry title="備註" needHr={0} input={all_data["備註"]}></FirstBlockEntry>
            
        </View>
        </>
    )
}

export default ShowBuilding;

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