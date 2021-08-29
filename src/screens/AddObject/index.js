import React, {useState} from "react";
import {View} from 'react-native';
import AddObjectFirstPage from "../AddObjectFirstPage";
const AddObject = ({navigation}) =>{
    return(
        <>
        <View>
            <AddObjectFirstPage navigation={navigation}></AddObjectFirstPage>           
        </View>
        </>
    )
}
  
export default AddObject;
