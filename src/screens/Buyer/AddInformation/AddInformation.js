import React from "react";
import {
  Box,
  HStack,
  VStack,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import TextInput from "./Input";

const AddInformation = () => {
  return (
    <ScrollView bg="#fff">
      <KeyboardAvoidingView behavior="padding">
        <Box flex={1} margin={5}>
          <VStack>
            <HStack>
              <TextInput/>
            </HStack>
          </VStack>
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddInformation;
