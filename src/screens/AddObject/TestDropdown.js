import React from "react";
import plate from "../../styles/plate";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
const TestDropdown = ({datas, tmpdata, setTmpdata, label, width, prompt}) => {
  return (
    <VStack space={4} >
      <Select 
        bg={plate.lightOrange}
        width={width}
        placeholder={(!prompt) && "請選擇"}
        onValueChange={(itemValue) => setTmpdata({...tmpdata,[label]:itemValue})}
        _selectedItem={{
          bg: "cyan.300",
          endIcon: <CheckIcon size={4} />,
        }}
      >
        {datas.map(item => <Select.Item label={item} value={item} />)}
      </Select>
    </VStack>
  )
}

export default TestDropdown;