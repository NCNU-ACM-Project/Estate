import React from "react";
import PropTypes from "prop-types";
import { Input, Icon, IconButton } from "native-base";
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';


const SearchBar = ({ keyWord, onChangeText, ...rest }) => {
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
SearchBar.propTypes = {
  keyWord : PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
}

export default SearchBar;

const CloseButton = (props) => {
  return (
    <IconButton
      icon={<Icon size='sm' size={6} color="gray.400" as={<EvilIcons name="close"/>} />}
      {...props}
    />
  );
}