import React from "react";
import {View , Text, Dimensions, StyleSheet} from "react-native";
import Hr from  "../../components/Hr";

const HEIGHT =  Math.floor(Dimensions.get("window").height/15);
const LEFT_TITLE_WIDTH = Math.floor(Dimensions.get("window").width/5);
const RIGHT_WIDTH = LEFT_TITLE_WIDTH*4;
const FirstBlockEntry = ({title,input,needHr}) =>{
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.leftContainer}>{title}</Text>
            <View style={styles.rightContainer}>
                {(typeof(input) != "string") && input}
                {(!input)&& <Text>還沒寫好</Text>}
                {(typeof(input) == "string") && <Text>{input}</Text>}
            </View>            
        </View>
        {(needHr != 0) &&
            <Hr></Hr>
        }
        </>
    )
}
export default FirstBlockEntry;

const styles = StyleSheet.create({
    container:{
        height:HEIGHT,
        flexDirection:'row',
        justifyContent:'space-evenly'
        //width: WIDTH,
    },
    leftContainer:{
        textAlign: 'center',
        width: LEFT_TITLE_WIDTH,
        paddingVertical: 10,
        marginHorizontal:10,
    },
    rightContainer:{
        width: RIGHT_WIDTH,
    }
})