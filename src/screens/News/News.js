import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Image, Modal} from 'react-native';
import px from 'react-native-px2dp';

/*新聞照片 分隔線 內容*/
const News = (props) => {
    const [ModalVisible, setModalVisible] = useState(false);
    return(
        <View style = {{top:props.Top}}>
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
                        <Image source={{ uri: props.Uri}} style={styles.photo}/>
                        <Text style = {{top:5, fontSize: 12*px,  lineHeight: 23}}>{props.Context}</Text>
                    </View>
                </View>
            </Modal>
        
            <TouchableOpacity //圖片
                onPress={() => setModalVisible(true)}
                style={{left: 25*px, top:26*px}}>
                <Image source={{ uri: props.Uri}} style={{width: 143*px, height: 140*px}}/>
            </TouchableOpacity>
        
            <Image style={{width: 143*px, height: 50*px}}/>
  
            <View style = {[styles.Split_line, {top: 29*px, left: 178*px,}]}/>   
        
            <TouchableOpacity  //內容
                onPress={() => setModalVisible(true)}
                style = {[styles.Context, {left: 189*px, top: 26*px}]}>
                <Text style = {{fontSize: 12*px, lineHeight: 23}}>{props.Context}</Text>
            </TouchableOpacity>

        </View>
    );
  }

  export default News;

  const styles = StyleSheet.create({
  
    /*分隔線*/
    Split_line: {
        position: 'absolute',
        borderColor: '#000000', 
        height: 139*px,
        borderRightWidth: 1.5*px,
    },
  
    /*內容*/
    Context:{
        position: 'absolute',
        width: 145*px,
        height: 136*px,
    },
  
    /*跳出視窗*/
    endView: {
        flex: 1,
        justifyContent: "flex-end",
    },

    photo:{
        borderRadius:10,
        width: 290*px, 
        height: 140*px
    },
  
    modalView: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
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
  