import React from "react";
import { TouchableOpacity,StyleSheet, Text,Dimensions, View} from "react-native";
import FirstBlockEntry from "../AddObject/FirstBlockEntry";
import plate from "../../styles/plate";

const HEIGHT =  Math.floor(Dimensions.get("window").height/20);
const AddObjectShowData = ({navigation}) =>{
    const onPress = (navigation, route) =>{
        navigation.navigate(route);
    }
    return(
        <>
        <View>
            <View>
                <FirstBlockEntry title="售物者" input = "測試"></FirstBlockEntry>
                <FirstBlockEntry title="電話1"></FirstBlockEntry>
                <FirstBlockEntry title="電話2"></FirstBlockEntry>
                <FirstBlockEntry title="手機1"></FirstBlockEntry>
                <FirstBlockEntry title="手機2"></FirstBlockEntry>
                <FirstBlockEntry title="EMAIL"></FirstBlockEntry>
            </View>
            <TouchableOpacity style={styles.buttombtn} 
                onPress={()=>{onPress(navigation, 'addObjectShowData')}}               
            >
                <Text>下一步</Text>                
            </TouchableOpacity>
        </View>
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
