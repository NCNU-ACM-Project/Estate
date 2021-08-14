import React from "react";
import { Input, Icon, IconButton } from "native-base";
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';


export class SearchBar extends React.Component {
  
  render() {
    const { keyWord, onChangeText, ...rest} = this.props
    return (
      <Input
        placeholder="輸入關鍵字"
        bg="#fff"
        width="100%"
        borderRadius={4}
        px={1}
        fontSize={14}
        InputLeftElement={<Icon size='sm' size={6} color="gray.400" as={<MaterialIcons name="search" />} />}
        InputRightElement={<CloseButton onPress={() => onChangeText('')}/>}
        value={keyWord}
        onChangeText={onChangeText}
        {...rest}
      />
    )
  }
}

const CloseButton = (props) => {
  return (
    <IconButton
      icon={<Icon size='sm' size={6} color="gray.400" as={<EvilIcons name="close"/>} />}
      {...props}
    />
  );
}