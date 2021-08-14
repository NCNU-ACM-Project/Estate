import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import px from 'react-native-px2dp';

/*下方選單*/
const Menu =()=>{
  const [ModalVisible, setModalVisible] = useState(false);
  return(
    <View>
      <Modal
        onRequestClose={() => setModalVisible(!ModalVisible)}
        animationType="slide"
        transparent={true}
        visible={ModalVisible}
      >
        <TouchableWithoutFeedback //點擊背景消失
          onPress={() => setModalVisible(!ModalVisible)}>
          <View style={styles.Press}/>
        </TouchableWithoutFeedback>
  
        <View style={styles.endView}>
          <View style={styles.modalView}>
            <ModalButton Left={15*px} text_Top={17*px} text="首 頁"/>
            <ModalButton Left={83*px} text_Top={7*px} text="會 員 中 心"/>
            <ModalButton Left={153*px} text_Top={17*px} text="聯 賣"/>
            <ModalButton Left={223*px} text_Top={17*px} text="收 藏"/>
            <ModalButton Left={293*px} text_Top={7*px} text="合 作 專 區"/>
          </View>
        </View>
      </Modal>

      <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style = {{position: 'absolute', left: 289*px, top: -60*px,}}
      >
        <Image source={{uri:"https://i.imgur.com/OsscaHR.png"}} style = {{width: 45*px, height: 45*px}}/>
      </TouchableOpacity>
    </View>
  );
}

const ModalButton=(props)=>{
  return(
    <TouchableOpacity style={{position:'absolute',top:3*px, left:props.Left}}>
      <Image source={{uri:"https://i.imgur.com/IdspETo.png"}} style={{width: 55*px, height: 55*px}}/>
      <Text style={{position:'absolute',fontSize:16*px,top: props.text_Top, left: 9.5*px}}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Menu;

const styles = StyleSheet.create({
  /*跳出視窗*/
  endView: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalView: {
    backgroundColor: "#EED5B0",
    padding: 30*px,
    shadowColor: "#000",
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
})