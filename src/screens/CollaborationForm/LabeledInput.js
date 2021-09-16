import React from "react";
import { StyleSheet, View } from "react-native";
import NorlmalText from "../../components/SmallText";
import { Input, Container, FormControl, Stack } from "native-base";

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
    <FormControl style={style}>
      <Stack>
        <View style={styles.container}>
          {label.length && (
            <NorlmalText style={styles.label}>{label}</NorlmalText>
          )}
          <Input
            variant={variant}
            placeholder={placeholder}
            style={styles.input}
            px={2}
            py={0}
            mx={2}
            width="70%"
            height="100%"
            onChange={_onChangeValue}
          />
        </View>
      </Stack>
    </FormControl>
  );
};

LabeledInput.defaultProps = {
  variant: "underlined",
  placeholder: "",
  label: "",
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
  },
});

export default LabeledInput;
