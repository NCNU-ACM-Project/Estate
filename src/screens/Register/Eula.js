import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Box } from "native-base";
import Hr from "../../components/Hr";
import NormalText from "../../components/NormalText";
import SubmitBtn from "../CollaborationForm/SubmitBtn";

const Eula = ({navigation}) => {
  const _next = () =>{
    navigation.push("register");
  }
  return (
    <Box style={[styles.container, styles.p_4]}>
      <View>
        <NormalText>台灣房地網會員條款</NormalText>
        <Hr />
        <NormalText smaller>
          歡迎您加入台灣房地網會員並使用安泰不動產 投資顧問股份有限公司...
        </NormalText>
      </View>
      <SubmitBtn label="我已閱讀會員條款" onPress={_next}/>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  p_4: {
    padding: 25,
  },
});

export default Eula;
