import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import px from 'react-native-px2dp';
import ModalTitle from "./Modal_title";
import ModalButton from './Modal_Button';

const Filter = (props)=>{
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

            <ModalTitle Title="請 選 擇 新 聞 分 類"/>

            <ModalButton Top={10} Text="系統故事"/>
            <ModalButton Top={20} Text="品牌故事"/>
            <ModalButton Top={30} Text="商品資訊"/>
            <ModalButton Top={40} Text="重要提醒"/>
            <ModalButton Top={50} Text="活動訊息"/>
            <ModalButton Top={60} Text="新品上架"/>
            <ModalButton Top={70} Text="祝 賀"/>
            <ModalButton Top={80} Text="媒體報導"/>
            <ModalButton Top={90} Text="法律實務"/>
            <ModalButton Top={100} Text="平台公告"/>
            <ModalButton Top={110} Text="房仲生活"/>
            <ModalButton Top={120} Text="縣市導覽"/>
            <ModalButton Top={130} Text="影 音"/>
          
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
      style = {{position:'absolute',left: props.Left, top: props.Top}}>
      <Image source={{uri:"https://i.imgur.com/ezM09y2.png"}} style = {{width: 24*px, height: 24*px}}/>
    </TouchableOpacity>
    </View>
    )
};

export default Filter;

const styles = StyleSheet.create({
    
    /*跳出視窗*/
    centerView:{
      flex: 1,
      justifyContent: "center",
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
