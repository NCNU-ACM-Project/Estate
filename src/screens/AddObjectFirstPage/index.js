import React, {useState} from "react";
import {Text, TouchableOpacity,ScrollView, View, StyleSheet, Dimensions} from 'react-native';

import Firstblock from "../AddObject/FirstBlock";
import BulidingBlock from "./BuildingBlock";
import LandBlock from "./LandBlock";
import plate from "../../styles/plate";

const { width } = Dimensions.get("window");
const HEIGHT =  Math.floor(Dimensions.get("window").height/20);

const AddObjectFirstPage = ({navigation,all_data,setAll_data}) =>{
    const onPress = (navigation, route) =>{
        setAll_data({...all_data,...tmpdata,"CHOOSE_OBJECT":CHOOSE_OBJECT[object_index],"CHOOSE_PEOPLE":CHOOSE_PEOPLE[people_index]});
        navigation.push(route,{all_data:all_data,setAll_data:setAll_data});
    }
    const [tmpdata, setTmpdata] = useState({});

    const CHOOSE_OBJECT=["土地","建物"];
    const [object_index,setObject_index] = useState(0);

    const CHOOSE_PEOPLE=["一般","專任"];
    const [people_index,setPeople_index] = useState(0);
    
    return(
        <>         
            <ScrollView >
                <Text>{JSON.stringify(all_data)}</Text>
                <View style={styles.upperContainer}>
                    <TouchableOpacity style={styles.upperbtn} onPress={()=>(setObject_index((object_index+1)%2), setTmpdata())}>
                        <Text>{CHOOSE_OBJECT[object_index]}</Text>                
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.upperbtn} onPress={()=>(setPeople_index((people_index+1)%2), setTmpdata())}>
                        <Text>{CHOOSE_PEOPLE[people_index]}</Text>                
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Firstblock tmpdata={tmpdata} setTmpdata={setTmpdata}/>
                </View>
                <View style={styles.contentContainer}>
                    {(object_index == 0)&& <LandBlock tmpdata={tmpdata} setTmpdata={setTmpdata}/>}
                    {(object_index == 1)&& <BulidingBlock tmpdata={tmpdata} setTmpdata={setTmpdata}/>}
                </View>
                
                <TouchableOpacity style={styles.buttombtn} 
                    onPress={()=>{onPress(navigation, 'addObjectFillData')}}     
                >
                    <Text>下一步</Text>                
                </TouchableOpacity>
            </ScrollView>            
        </>
    )    
}
export default AddObjectFirstPage;

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
        margin:10,
        paddingVertical:10,
        alignItems:"center",
        backgroundColor:plate.lightOrange,
        borderRadius: 2,
    }
})
