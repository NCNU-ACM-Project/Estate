import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import px from 'react-native-px2dp';
import { AntDesign } from '@expo/vector-icons'; 

/*search*/
const Search = (props)=>{
    return(
      <TouchableOpacity style = {{position: 'absolute', left: props.Left, top: props.Top}}>
        <AntDesign name="search1" size={24} color="#8E8E8E" />
      </TouchableOpacity>
    );
}

export default Search;