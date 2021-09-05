import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NormalText from "../../components/NormalText";
import { Input, Center, Button, Vstack } from "native-base";
import { loginRequest } from "../../store/slices/user.reucer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import SmallText from "../../components/SmallText";

const LoginPage = () => {
  const [userName, sertUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const onLogin = () => {
    dispatch(loginRequest(userName, passwd));
  };
  return (
    <View style={styles.container}>
      <Center alignItems="center" style={[styles.container, styles.p_4]}>
          <Text>{JSON.stringify(userData)}</Text>
          <NormalText>會員登入</NormalText>
          <Input
            width="100%"
            mx={3}
            my={2}
            borderRadius={0}
            placeholder="帳號"
            onChangeText={sertUserName}
            InputLeftElement={
              <FontAwesome
                name="user"
                size={24}
                color="black"
                style={styles.inputIcon}
              />
            }
          />
          <Input
            w="100%"
            mx={3}
            my={2}
            borderRadius={0}
            type="password"
            placeholder="密碼"
            onChangeText={setPasswd}
            InputLeftElement={
              <FontAwesome
                name="lock"
                size={24}
                color="black"
                style={styles.inputIcon}
              />
            }
          />
          <TouchableOpacity style={styles.forgetPassWd}>
            <SmallText>
              忘記密碼
            </SmallText>
          </TouchableOpacity>
          <Button small onPress={onLogin}>
            登入
          </Button>
        </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    width: "100%",
  },
  input: {
    borderRadius: 0,
  },
  inputIcon: {
    marginLeft: 5,
  },forgetPassWd:{
    alignSelf: "flex-end"
  }, p_4: {
    padding: 50,
  }
});

export default LoginPage;
