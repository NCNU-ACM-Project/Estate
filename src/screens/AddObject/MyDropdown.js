import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {StyleSheet} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Plate from "../../styles/plate";
const MyDropdown = (props)=>{
    return (
        <>
        <SelectDropdown
            data={props.datas}
            defaultButtonText = {props.prompt}
            onSelect={(selectedItem, index) => {}}//這個函式是必要的
            buttonTextAfterSelection={(selectedItem, index)=>{return selectedItem}}  
            renderDropdownIcon={() => {
                return (
                  <FontAwesome name="chevron-down" color={"#444"} size={18} />
                );
            }}
            buttonStyle={[styles.dropdown1BtnStyle, {width: props.width, height:props.height}]}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}         
        />
        </>
    )
}
export default MyDropdown

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: "80%",
        backgroundColor: Plate.lightOrange,
        borderRadius: 8,
    },
    dropdown1BtnTxtStyle: { color: "#444", textAlign: "center" },
    dropdown1RowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
    },
    dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});