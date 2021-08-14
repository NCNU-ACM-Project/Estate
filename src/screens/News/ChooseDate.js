import React, {useState} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import px from 'react-native-px2dp';

import DatePicker from 'react-native-modern-datepicker';

/*日期*/
const ChooseDate = (props)=>{
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
          
          <View style={[styles.centerView,{margin: 40}]}>
            <View>
                <FullUsageExample/>
              </View>
            </View>
          </Modal>
  
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.Date,{left:props.Left, top: props.Top}]}>
          <Text style={{ fontWeight:'bold',fontSize: 13.5*px, color: '#FFAF60' }}>選  擇  日  期</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const FullUsageExample = () => {
    return (
      <DatePicker
        options={{
          backgroundColor: '#fff',
          textHeaderColor: '#FFA25B',
          textDefaultColor: '#FF9224',
          selectedTextColor: '#fff',
          mainColor: '#FFA042',
          textSecondaryColor: '#AE8F00',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        current="2020-07-13"
        selected="2020-07-23"
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
      />
    );
  };

export default ChooseDate;

const styles = StyleSheet.create({
    Date:{
        position: 'absolute',
        borderRadius:5,
        width: 147.97*px, 
        height: 32*px, 
        borderColor: '#000000', 
        borderWidth: 1*px,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerView:{
        flex: 1,
        justifyContent: "center",
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
  