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

const deal_road_name = ({all_data,roadname, setRoadname})=>{
    //const items = ["地段_段","地段_小段","地段_地號1","地段_地號2","地段_筆"];
    setRoadname(all_data["地段_縣市"] + " "+ all_data["地段_鄉鎮區"] );
    // items.map((item)=>{
    //     if(item != "地段_地號1" || item != "地段_地號2"){
    //         if(all_data[item]){
    //             setRoadname(roadname + all_data[item]+ item.split[2]);
    //         }
    //     }else{
    //         if(all_data[item]){
    //             setRoadname(roadname + all_data[item] + (item =="地段_地號1" ? "-" : " "));
    //         }   
    //     }
    // })    
}
const ShowLand = ({all_data}) => {
    const [roadname, setRoadname] = useState("");
    //deal_road_name({all_data,roadname, setRoadname}); useEffect
    //setRoadname(all_data["地段_縣市"] + " "+ all_data["地段_鄉鎮區"] );
    return (
        <>
        {/* <Text>{roadname}fff</Text> */}
        <FirstBlockEntry title="地段" input = {all_data["地段_縣市"]}/>
        <View style={styles.container}>           
            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >土地</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["土地_坪"]}</Text>
                        <Text> 坪 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 總價 </Text>
                        <Text>{all_data["土地_總價"]}</Text>
                        <Text> 萬 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>

            <View style={styles.entry_container}>
                <Text style={styles.entry_left} >單價/坪</Text>
                <View style={styles.entry_right}>
                    <View style={styles.entry_right_inside}>
                        <Text>{all_data["單價/坪_萬"]}</Text>
                        <Text> 萬 </Text>
                        <View style={styles.verticleLine} />

                        <Text>臨路</Text>
                    </View>                
                    <View style={styles.entry_right}>
                        <View style={styles.entry_right_inside}>                        
                            <Text> 路寬 </Text>
                            <Text>{all_data["單價/坪_路寬"]}</Text>
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
                        <Text>{all_data["面寬_米"]}</Text>
                        <Text> 米 </Text>
                        <View style={styles.verticleLine} />
                        <Text> 縱深 </Text>
                        <Text>{all_data["面寬_縱深"]}</Text>
                        <Text> 米 </Text>
                    </View>
                </View>
            </View>
            <Hr></Hr>
            <FirstBlockEntry 
                title="使用分區" 
                input = {all_data["使用分區"]}
                needHr={0}
            />
            <FirstBlockEntry 
                title="使用類別" 
                input = {all_data["使用類別"]}
            />
            <FirstBlockEntry title="備註" needHr={0} input={all_data["備註"]}></FirstBlockEntry>
            
        </View>
        </>
    )
}

export default ShowLand;

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