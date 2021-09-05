import React from "react";
import { View, Text } from "react-native";
import Hr from "../../components/Hr";
import NormalText from "../../components/NormalText";

const Eula = () => {
  return (
    <View>
      <NormalText>台灣房地網會員條款</NormalText>
      <Hr />
      <NormalText>
        歡迎您加入台灣房地網會員並使用安泰不動產 投資顧問股份有限公司...
      </NormalText>
    </View>
  );
};

export default Eula;
