import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, TextArea, FormControl, Stack } from "native-base";

const LabeledInput = ({ label, style, placeholder, setData, data, ...rest }) => {
    const _onChangeValue = ({ nativeEvent }) => {
    if (!!setData || !!data) {
      setData({ ...data, [label]: nativeEvent.text });
    }
  };

  return (
    <FormControl style={[styles.outherContainer, style]}>
      <Stack my={5}>
        <TextArea
          width={"100%"}
          placeholder={placeholder}
          totalLines={7}
          {...rest}
          onChange={_onChangeValue}
        />
      </Stack>
    </FormControl>
  );
};

LabeledInput.defaultProps = {
  placeholder: "",
  data: undefined,
  setData: undefined,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 20,
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 20,
    width: "30%",
    borderRadius: 4,
    backgroundColor: "#FCDBD1",
    paddingVertical: 2,
    textAlign: "center",
  },outherContainer:{
      flex: 1
  }
});

export default LabeledInput;