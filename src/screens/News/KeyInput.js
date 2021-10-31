import React from "react";
import { Input, Icon, Box, Button } from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setSearchNews } from "../../store/slices/filter";
export const KeyInput = (props) => {
  const dispatch = useDispatch();
  const { searchNews } = useSelector((state) => state.filter);
  const SortItemSelect = (keyWord) => {
    dispatch(setSearchNews(keyWord));
    console.log(keyWord);
  };

  return (
    <Box w="87%" my={2}>
      <Input
        variant="unstyled"
        borderRadius={10}
        py={2}
        bg="rgb(250,250,250)"
        borderColor="rgb(250,250,250)"
        value={searchNews}
        onChangeText={(keyWord) => {
          SortItemSelect(keyWord);
        }}
        InputLeftElement={
          <Icon
            as={<AntDesign name="search1" size={24} />}
            size={5}
            ml={4}
            color="#8E8E8E"
          />
        }
        InputRightElement={
          <Button
            size={6}
            bg="rgb(250,250,250)"
            mr={3}
            colorScheme="rgb(230,230,230)"
            onPress={() => {
              SortItemSelect("");
            }}
          >
            <Icon as={<Feather name="x" />} size={5} m={2} color="#8E8E8E" />
          </Button>
        }
        placeholder={props.Defal}
      />
    </Box>
  );
};
