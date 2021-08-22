import React, { useState } from "react";
import { Input, Icon, Box, Button } from "native-base";
import { AntDesign, Feather } from "@expo/vector-icons";
export const KeyInput = () => {
  const [keyWord, onChangeText] = useState("");
  console.log(keyWord);
  return (
    <Box w="87%" my={2}>
      <Input
        variant="unstyled"
        borderRadius={10}
        py={2}
        bg="rgb(250,250,250)"
        borderColor="rgb(250,250,250)"
        value={keyWord}
        onChangeText={onChangeText}
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
              onChangeText("");
            }}
          >
            <Icon as={<Feather name="x" />} size={5} m={2} color="#8E8E8E" />
          </Button>
        }
        placeholder="輸入關鍵字"
      />
    </Box>
  );
};
