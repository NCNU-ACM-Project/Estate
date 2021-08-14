import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import px from 'react-native-px2dp';

/*search*/
const Search = (props)=>{
    return(
      <TouchableOpacity style = {{position: 'absolute', left: props.Left, top: props.Top}}>
        <Image source={{uri:"https://i.imgur.com/euDrgzo.png"}} style = {{width: 24*px, height: 24*px}}/>
      </TouchableOpacity>
    );
}

export default Search;