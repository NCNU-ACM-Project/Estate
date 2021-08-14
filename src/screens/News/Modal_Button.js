import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import px from 'react-native-px2dp';

const ModalButton = (props) => {
    return(
        <TouchableOpacity style = {{top:props.Top}}>
            <Text style = {{fontSize:13*px}}>{props.Text}</Text>
        </TouchableOpacity>
    )
}

export default ModalButton;