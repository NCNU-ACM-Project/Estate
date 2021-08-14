import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const GoodNews = () => {
  return (
    <View >
      <Text style={styles.toptext}> 好康消息 </Text>
      <Image
        source={{ uri: 'https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp', }}
        style={{ position: 'absolute', borderRadius: 15, width: 290, height: 152, top: 70, left: 68 }} />
      <Text style={{ position: 'absolute', width: 290, height: 152, top: 230, left: 68 }}> ☆ 嘉義火車站旁收租透天 共10間套房 ☆ ㊣市中心 一樓還可當店面 投資報酬率高  </Text>

      <Image
        source={{ uri: 'https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp', }}
        style={{ position: 'absolute', borderRadius: 15, width: 290, height: 152, top: 275, left: 68 }} />
      <Text style={{ position: 'absolute', width: 290, height: 152, top: 435, left: 68 }}> ☆ 嘉義火車站旁收租透天 共10間套房 ☆ ㊣市中心 一樓還可當店面 投資報酬率高  </Text>

      <Image
        source={{ uri: 'https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp', }}
        style={{ position: 'absolute', borderRadius: 15, width: 290, height: 152, top: 480, left: 68 }} />
      <Text style={{ position: 'absolute', width: 290, height: 152, top: 640, left: 68 }}> ☆ 嘉義火車站旁收租透天 共10間套房 ☆ ㊣市中心 一樓還可當店面 投資報酬率高  </Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default GoodNews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toptext: {
    lineHeight: 45,
    backgroundColor: '#EED5B0',
    fontSize: 20,
    textAlign: 'center',
  },
});
