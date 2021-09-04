import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import plate from "../../styles/plate";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Image, Center, VStack } from "native-base";
import NormalText from "../../components/NormalText";

const Entrance = ({navigation}) => {

    const _goLogin = ()=>{
        navigation.push("login");
    }
    const _goRegister = ()=>{
        navigation.push("register");
    }

  return (
    <Box style={styles.container}>
      <LinearGradient
        colors={[plate.moreLightOrange, "#FFF"]}
        style={styles.container}
      >
        <Center style={styles.container}>
          <VStack style={[styles.container, styles.innerContainer]}>
            <Image
              source={require("../../../assets/app_icon.png")}
              size="xl"
              resizeMode="cover"
            />
            <View>
              <TouchableOpacity style={[styles.btn, styles.loginBtn]} onPress={_goLogin}>
                <NormalText style={styles.brownText}>會員登入</NormalText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.RegistBtn]} onPress={_goRegister}>
                <NormalText style={styles.brownText}>註冊會員</NormalText>
              </TouchableOpacity>
            </View>
          </VStack>
        </Center>
      </LinearGradient>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    justifyContent: "space-evenly",
  },
  btn: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
  },
  loginBtn: {
    backgroundColor: "#EED5B0",
  },
  RegistBtn: {
    backgroundColor: "rgba(156, 90, 53, 0.83)",
  },
  brownText: {
    color: "#784A4A",
  },
});

export default Entrance;
