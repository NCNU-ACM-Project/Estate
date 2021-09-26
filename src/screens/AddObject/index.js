import React, {useState} from "react";
import {View, Text} from 'react-native';
import AddObjectFirstPage from "../AddObjectFirstPage";
const AddObject = ({navigation}) =>{
    const [all_data, setAll_data] = useState({});
    return(
        <>
        <View>
            {/* <Text>{JSON.stringify(all_data)}</Text> */}
            <AddObjectFirstPage navigation={navigation} all_data={all_data} setAll_data={setAll_data}/>
        </View>
        </>
    )
}
  
export default AddObject;
