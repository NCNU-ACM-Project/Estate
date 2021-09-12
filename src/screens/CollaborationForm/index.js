import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import LabeledInput from "./LabeledInput";
import { Stack } from "native-base";
import TextArea from "./TextArea";
import SubmitBtn from "../../components/SubmitBtn";

const ContactForm = () => {
  const [data, setData] = useState({});

  return (
    <ScrollView style={styles.container}>
      <Stack mx={4} style={styles.container}>
        <Text>{JSON.stringify(data)}</Text>
        <LabeledInput label="公司名稱" data={data} setData={setData} />
        <LabeledInput label="姓名" data={data} setData={setData} />
        <LabeledInput label="聯絡信箱" data={data} setData={setData} />
        <LabeledInput label="聯絡手機" data={data} setData={setData} />
        <LabeledInput label="合作主題" data={data} setData={setData} />
        <TextArea
          numberOfLines={7}
          data={data}
          label="合作內容"
          placeholder="合作內容"
          setData={setData}
        />
          <SubmitBtn label="送出" />
      </Stack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textArea: {
    flex: 1,
    flexGrow: 1,
  },
});

export default ContactForm;
