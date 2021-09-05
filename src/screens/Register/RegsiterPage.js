import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { VStack, Box, Circle, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import NormalText from "../../components/NormalText";
import LabeledInput from "./LabeledInput1";

const width = Dimensions.get("window").width;

const RegsiterPage = ({navigation}) => {
    const _onRegist = () => {
        navigation.popToTop();
    }

  const inputs = [
    "姓名",
    "帳號",
    "密碼",
    "確認密碼",
    "電話",
    "信箱",
    "地址",
    "市話",
  ];
  const [data, setData] = useState({});

  return (
    <ScrollView
      contentContainerStyle={[
        styles.py_4,
        styles.my_3,
        styles.container,
        styles.justifyBetween,
      ]}
    >
      <VStack space={4} style={[styles.container, styles.justifyStart]}>
        <Box style={[styles.px_3, styles.innerContainer, styles.py_2]}>
          {/* headers */}
          <AntDesign
            name="addfolder"
            size={24}
            color="black"
            style={styles.m_1}
          />
          <NormalText style={styles.m_1}>註冊會員</NormalText>
        </Box>

        {/* camera button can get someone's face */}
        <TouchableOpacity style={styles.center}>
          <Circle border={1} borderColor="#000" size={100}>
            <AntDesign name="camerao" size={24} color="black" />
          </Circle>
        </TouchableOpacity>

        {/* label and inputs */}
        {inputs.map((label) => (
          <LabeledInput
            label={label}
            variant="outline"
            key={label}
            data={data}
            setData={setData}
          />
        ))}
      </VStack>

      <HStack style={styles.justifyRight}>
        <TouchableOpacity style={styles.px_2} onPress={_onRegist}>
          <NormalText style={[styles.underLineBtn, styles.contentText]}>
            確認註冊
          </NormalText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.px_2} onPress={_onRegist}>
          <NormalText style={[styles.contentText, styles.pinkText]}>
            取消
          </NormalText>
        </TouchableOpacity>
      </HStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  py_4: {
    paddingHorizontal: 25,
  },
  px_3: {
    paddingHorizontal: 15,
  },
  px_2: {
    padding: 10,
  },
  py_2: {
    paddingVertical: 10,
  },
  my_3: {
    marginVertical: 25,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    width: Math.floor(width / 2),
  },
  m_1: {
    marginHorizontal: 5,
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  justifyRight: {
    justifyContent: "flex-end",
  },
  underLineBtn: {
    borderBottomWidth: 1,
  },
  contentText: 20,
  pinkText: {
    color: "#FD7474",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
});

export default RegsiterPage;
