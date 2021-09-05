import React from "react";
import { StyleSheet, View } from "react-native";
import NorlmalText from "../../components/SmallText";
import { Input, FormControl, Stack, Box } from "native-base";
import plate from "../../styles/plate";

const LabeledInput = ({
  label,
  style,
  variant,
  placeholder,
  setData,
  data,
}) => {
  const _onChangeValue = ({ nativeEvent }) => {
    if (!!setData || !!data) {
      setData({ ...data, [label]: nativeEvent.text });
    }
  };

  return (
    <Input
      variant={variant}
      placeholder={placeholder}
      style={styles.input}
      p={0}
      borderColor="#000"
      _focus={{borderColor: "#000"}}
      InputLeftElement={
        !!label.length && (
          <NorlmalText style={[styles.label, styles.p_2]}>{label}</NorlmalText>
        )
      }
      onChange={_onChangeValue}
    />
  );
};

LabeledInput.defaultProps = {
  variant: "",
  placeholder: "",
  label: "",
  data: undefined,
  setData: undefined,
  InputLeftElement: null,
};

const styles = StyleSheet.create({
  p_2: {
    padding: 10,
  },
  label: {
    fontSize: 20,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 1,
    borderColor: "#000",
    backgroundColor: "#FCDBD1",
    paddingVertical: 2,
    textAlign: "center",
    marginRight: 5
  },
});

export default LabeledInput;
