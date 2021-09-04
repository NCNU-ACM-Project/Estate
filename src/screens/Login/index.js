import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NormalText from "../../components/NormalText";
import { Input, Center, Button } from "native-base";
import { loginRequest } from "../../store/slices/user.reucer";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [userName, sertUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const onLogin = () => {
    dispatch(loginRequest(userName, passwd));
  };
  return (
    <View style={styles.container}>
      <Center>
          <Text>
              {JSON.stringify(userData)}
          </Text>
        <NormalText>會員登入</NormalText>
        <Input
          width="70%"
          mx={3}
          my={2}
          placeholder="帳號"
          onChangeText={sertUserName}
        />
        <Input
          w="70%"
          mx={3}
          my={2}
          type="password"
          placeholder="密碼"
          onChangeText={setPasswd}
        />
        <Button small onPress={onLogin}>登入</Button>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: "100%",
  },
});

export default LoginPage;
