import React from "react";
import { Image, ScrollView, TouchableOpacity,StyleSheet, Text,Dimensions, View} from "react-native";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import plate from "../../styles/plate";
import ShowLand from "./ShowLand";
import ShowBuilding from "./ShowBuliding";
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);

const AddObjectShowData = ({route,navigation}) =>{
    const onPress = (navigation, route) =>{
        navigation.navigate(route);
    }
    return(
        <>
        <ScrollView>
            <Text>{JSON.stringify(route.params.all_data)}</Text>
            <FirstBlockEntry title="物件名稱" input = {route.params.all_data["物件名稱"]}/>
            <FirstBlockEntry title="性質" input = {route.params.all_data["性質"]}/>
            <View style={styles.img_external_container}>
                <Image
                source={{ uri: 'https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp', }}
                style={styles.imgcontainer} />
            </View>
            {(route.params.all_data["CHOOSE_OBJECT"]=="土地") && 
                <ShowLand
                    all_data={route.params.all_data}
                />
            }
            {(route.params.all_data["CHOOSE_OBJECT"]=="建物") && 
                <ShowBuilding
                    all_data={route.params.all_data}
                />
            }
            <View>
                <FirstBlockEntry title="售物者" input = {route.params.all_data["售物者"]}/>
                <FirstBlockEntry title="電話1" input = {route.params.all_data["電話1"]}/>
                <FirstBlockEntry title="電話2" input = {route.params.all_data["電話2"]}/>
                <FirstBlockEntry title="手機1" input = {route.params.all_data["手機1"]}/>
                <FirstBlockEntry title="手機2" input = {route.params.all_data["手機2"]}/>
                <FirstBlockEntry title="EMAIL" input = {route.params.all_data["電子信箱"]}/>
            </View>
            <TouchableOpacity style={styles.buttombtn} 
                onPress={()=>{onPress(navigation, 'home')}}               
            >
                <Text>下一步</Text>                
            </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default AddObjectShowData;
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
