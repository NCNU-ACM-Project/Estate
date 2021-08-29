import React, {useState} from "react";
import {Text, TouchableOpacity,ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import Firstblock from "./FirstBlock";
import BulidingBlock from "./BuildingBlock";
import LandBlock from "./LandBlock";
import plate from "../../styles/plate";
import FillData from "./FillData";
import { flexDirection } from "styled-system";

const { width } = Dimensions.get("window");
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);

const AddObject = () =>{
    const CHOOSE_OBJECT=["土地","建物"];
    const [object_index,setObject_index] = useState(0);

    const CHOOSE_PEOPLE=["一般","專任"];
    const [people_index,setPeople_index] = useState(0);

    const [page_state,setPage_state] = useState(0);
    return(
        <>
            {(page_state == 0) && 
            <ScrollView style={styles.container}>
                <View style={styles.upperContainer}>
                    <TouchableOpacity style={styles.upperbtn} onPress={()=>(setObject_index((object_index+1)%2))}>
                        <Text>{CHOOSE_OBJECT[object_index]}</Text>                
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.upperbtn} onPress={()=>(setPeople_index((people_index+1)%2))}>
                        <Text>{CHOOSE_PEOPLE[people_index]}</Text>                
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Firstblock/>
                </View>
                <View style={styles.contentContainer}>
                    {(object_index == 0)&& <LandBlock/>}
                    {(object_index == 1)&& <BulidingBlock/>}
                </View>
                <TouchableOpacity style={styles.buttombtn} 
                    onPress={()=>(setPage_state(page_state+1))}                
                >
                    <Text>下一步</Text>                
                </TouchableOpacity>    
            </ScrollView>
            }
            {(page_state == 1) && 
            <View style={styles.contentContainer}>
                <FillData></FillData>
                <TouchableOpacity style={styles.buttombtn} 
                    onPress={()=>(setPage_state(page_state+1))}                
                >
                    <Text>下一步</Text>                
                </TouchableOpacity>
            </View>
            //聯絡人資訊
            }
            {(page_state == 2)&&
            <View style={styles.contentContainer}>
                <Text>page3</Text>
            </View>
            //資料預覽確認
            }
        </>
    )    
}
export default AddObject;
const styles = StyleSheet.create({
    upperContainer:{
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent:'space-evenly',
        paddingBottom: 10,
        margin: 10,
    },
    upperbtn:{
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal:45,
        margin: 10,
    },
    container: {
        flexDirection: "column",
        width: width,
        flex: 1,
      },
    contentContainer: {
        width: "100%",
        marginTop: 10
    },
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
