import React, { useState } from "react";
import { Popover, Button, Text, Box, useDisclose } from "native-base";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { useDispatch } from "react-redux";
import { setDate } from "../../store/slices/addinformation";
import { setChooseDate } from "../../store/slices/filter";


export function ChooseDate(props) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [datevalue, ondatechange] = useState(getToday());
  const [tempvalue, ontempchange] = useState("選 擇 日 期");
  const dispatch = useDispatch();
  const btnChange = (date) => {
    if (props.name === "新增物件") {
      dispatch(setDate(date));
    }
    else{
      dispatch(setChooseDate(date));
    }
  };
  console.log(tempvalue);
  return (
    <Box ml={23}>
      <Popover
        isOpen={isOpen}
        onClose={onClose}
        trigger={(triggerProps) => {
          return (
            <Button
              {...triggerProps}
              onPress={onOpen}
              w={160}
              size="sm"
              variant="outline"
              colorScheme="rgb(255,180,140)"
            >
              {tempvalue}
            </Button>
          );
        }}
      >
        <Popover.Content borderRadius={"xl"} bg="#fff">
          <Popover.Arrow />
          <Popover.Body size={335}>
            <DatePicker
              options={{
                backgroundColor: "#fff",
                textHeaderColor: "#FFA25B",
                textDefaultColor: "#FF9224",
                selectedTextColor: "#fff",
                mainColor: "#FFA042",
                textSecondaryColor: "#AE8F00",
                borderColor: "rgba(122, 146, 165, 0.1)",
              }}
              maximumDate={getToday()}
              current={datevalue}
              selected={datevalue}
              onDateChange={(date) => ondatechange(date)}
              mode="calendar"
              minuteInterval={30}
            />
          </Popover.Body>
          <Button.Group ml={180} mb={-3} top={-18}>
            <Button
              onPress={() => {
                {
                  ontempchange("");
                  onClose();
                }
              }}
              size="sm"
              variant="ghost"
              colorScheme="rgb(255,180,140)"
            >
              清 除
            </Button>
            <Button
              onPress={() => {
                {
                  ontempchange(datevalue);
                }
                {
                  btnChange(datevalue);
                }
                onClose();
              }}
              size="sm"
              bg="rgb(255,190,140)"
              colorScheme="rgb(255,180,140)"
            >
              <Text color="#fff">確 定</Text>
            </Button>
          </Button.Group>
        </Popover.Content>
      </Popover>
    </Box>
  );
}
