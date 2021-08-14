import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal} from 'react-native';
import px,{px2dp} from 'react-native-px2dp';
import ModalTitle from './Modal_title';
import ModalButton from './Modal_Button';

/*排序*/
const Sort = (props)=>{
    const [ModalVisible, setModalVisible] = useState(false);
  return(
    <View>
      <Modal
        onRequestClose={() => setModalVisible(!ModalVisible)}
        animationType="fade"
        transparent={true}
        visible={ModalVisible}
      >
        <TouchableWithoutFeedback //點擊背景消失
          onPress={() => setModalVisible(!ModalVisible)}>
          <View style={styles.Press}/>
        </TouchableWithoutFeedback>

        <View style={[styles.centerView,{margin: 93}]}>
          <View style={[styles.modalView, {padding:0}]}>

            <ModalTitle Title="請 選 擇 排 序 方 式"/>

            <ModalButton Top={15} Text="日期升冪"/>
            <ModalButton Top={30} Text="日期降冪"/>
            <ModalButton Top={45} Text="坪數升冪"/>
            <ModalButton Top={60} Text="坪數降冪"/>
            <ModalButton Top={75} Text="總價升冪"/>
            <ModalButton Top={90} Text="總價降冪"/>
            <ModalButton Top={105} Text="地址升冪"/>
            <ModalButton Top={120} Text="地址降冪"/>
          
            <Text style = {{fontSize:60*px}}></Text>
            
            <TouchableOpacity
              style={[styles.button, {left:70*px}]}
              onPress={() => setModalVisible(!ModalVisible)}
            >
              <Text style={{color:"red"}}>取 消</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    <TouchableOpacity 
      onPress={() => setModalVisible(true)}
      style = {{position:'absolute' ,left: props.Left, top: props.Top}}>
      <Image source={{uri:"https://i.imgur.com/XIBAv8W.png"}} style = {{width: 24*px, height: 24*px}}/>
    </TouchableOpacity>
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({
    /*跳出視窗*/
    centerView:{
      flex: 1,
      justifyContent: "center",
    },
    endView: {
      flex: 1,
      justifyContent: "flex-end",
    },
  
    filter_title:{
      backgroundColor:'#FCEBCC',
      alignItems: 'center',
      justifyContent: 'center',
      height: 27*px,
      width: 204*px,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },

    button: {
      borderRadius: 20,
      padding: 10,
    },
    
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    /*點擊背景消失*/
    Press:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: null,
  },
});  