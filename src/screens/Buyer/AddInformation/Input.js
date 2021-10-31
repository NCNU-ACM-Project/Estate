import {
  VStack,
  Input,
  Button,
  FormControl,
  Select,
  HStack,
} from "native-base";
import plate from "../../../styles/plate";
import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setData } from "../../../store/slices/addinformation";
import BtnChange from "./BtnChange";
import { ChooseDate } from "../../News/ChooseDate";
import { Text } from "react-native";
import SignupSchema from "./Yup_input";

const TextInput = () => {
  const [btn1color, setbtn1color] = React.useState("rgb(220,220,220)");
  const [btn2color, setbtn2color] = React.useState("rgb(220,220,220)");
  const [btn3color, setbtn3color] = React.useState("rgb(220,220,220)");
  const [btn4color, setbtn4color] = React.useState("rgb(220,220,220)");
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setData(data));
    console.log("submiting with ", data);
  };
  return (
    <Formik
      initialValues={{
        name: "",
        level: "",
        look: "",
        city: "",
        area: "",
        address: "",
        source: "",
        remark: "",
        buyer: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <VStack space={4} width="100%">
          <FormControl isRequired="true">
            <HStack alignItems="center" space="1">
              <FormControl.Label>客人姓名</FormControl.Label>
              <Input
                width="37%"
                py={1}
                onBlur={handleBlur("name")}
                placeholder="姓名"
                onChangeText={handleChange("name")}
                value={values.name}
              />
              <HStack alignItems="center">
                <Button
                  size="sm"
                  bg={btn1color}
                  onPress={() => {
                    {
                      values.buyer = "買";
                      setbtn1color(plate.lightOrange),
                        setbtn2color("rgb(220,220,220)");
                    }
                  }}
                >
                  買
                </Button>
                <Button
                  ml={2}
                  size="sm"
                  bg={btn2color}
                  onPress={() => {
                    {
                      values.buyer = "賣";
                      setbtn1color("rgb(220,220,220)"),
                        setbtn2color(plate.lightOrange);
                    }
                  }}
                >
                  賣
                </Button>
              </HStack>
            </HStack>
            <HStack space={170}>
              {errors.name && touched.name ? <Text color="cyan.500">{errors.name}</Text> : null}
              {errors.buyer && touched.buyer ? <Text>{errors.buyer}</Text> : null}
            </HStack>
          </FormControl>

          <FormControl isRequired="true">
            <HStack alignItems="center">
              <FormControl.Label>等級</FormControl.Label>
              <Select
                selectedValue={onSubmit.level}
                width="86%"
                placeholder="請選擇"
                onValueChange={handleChange("level")}
                py={1}
              >
                {mylevel.map(({ label, value }) => {
                  return (
                    <Select.Item label={label} value={value} key={value} />
                  );
                })}
              </Select>
            </HStack>
            {errors.level && touched.level ? <Text>{errors.level}</Text> : null}
          </FormControl>

          <FormControl isRequired="true">
            <HStack alignItems="center">
              <FormControl.Label>接觸日期</FormControl.Label>
              <ChooseDate name="新增物件" />
            </HStack>
          </FormControl>
          <FormControl isRequired="true">
            <HStack alignItems="center">
              <FormControl.Label>帶看過</FormControl.Label>
              <Button
                size="sm"
                bg={btn3color}
                onPress={() => {
                  {
                    values.look = "Yes";
                    setbtn3color(plate.lightOrange),
                      setbtn4color("rgb(220,220,220)");
                  }
                }}
              >
                Yes
              </Button>
              <Button
                ml={2}
                size="sm"
                bg={btn4color}
                onPress={() => {
                  {
                    values.look = "No";
                    setbtn3color("rgb(220,220,220)"),
                      setbtn4color(plate.lightOrange);
                  }
                }}
              >
                No
              </Button>
            </HStack>
            {errors.look && touched.look ? <Text>{errors.look}</Text> : null}
          </FormControl>

          <VStack space={4}>
            <FormControl isRequired="true">
              <HStack alignItems="center" space={1}>
                <FormControl.Label>地址</FormControl.Label>
                <Select
                  selectedValue={onSubmit.city}
                  minWidth={150}
                  placeholder="請選擇縣市"
                  onValueChange={handleChange("city")}
                  py={1}
                >
                  {locations.map(({ label, value }) => {
                    return (
                      <Select.Item label={label} value={label} key={value} />
                    );
                  })}
                </Select>
                <Select
                  selectedValue={onSubmit.area}
                  minWidth={150}
                  placeholder="鄉鎮區"
                  onValueChange={handleChange("area")}
                  py={1}
                >
                  {locations.map(({ label, value }) => {
                    return (
                      <Select.Item label={label} value={label} key={value} />
                    );
                  })}
                </Select>
              </HStack>
              {errors.city && touched.city ? <Text>{errors.city}</Text> : null}
            </FormControl>
            <FormControl>
              <HStack alignItems="center">
                <Input
                  py={1}
                  width="100%"
                  onBlur={handleBlur("address")}
                  placeholder="詳細地址"
                  onChangeText={handleChange("address")}
                  value={values.address}
                />
              </HStack>
            </FormControl>
            <HStack space={12}>
              <BtnChange name1="高" name2="低" label="坪數" />
              <BtnChange name1="高" name2="低" label="價位" />
            </HStack>
            <HStack space={12}>
              <BtnChange name1="高" name2="低" label="房數" />
              <BtnChange name1="有" name2="無" label="車位" />
            </HStack>

            <FormControl>
              <HStack alignItems="center">
                <FormControl.Label>來源</FormControl.Label>
                <Input
                  py={1}
                  width="85%"
                  onBlur={handleBlur("source")}
                  onChangeText={handleChange("source")}
                  value={values.source}
                />
              </HStack>
            </FormControl>

            <FormControl>
              <FormControl.Label>備註</FormControl.Label>
              <Input
                multiline={true}
                py={1}
                width="100%"
                onBlur={handleBlur("remark")}
                onChangeText={handleChange("remark")}
                value={values.remark}
              />
            </FormControl>
          </VStack>

          <Button
            py={1}
            onPress={handleSubmit}
            colorScheme="pink"
            bg={plate.lightOrange}
          >
            新 增
          </Button>
        </VStack>
      )}
    </Formik>
  );
};
export default TextInput;

export const mylevel = [
  { label: "A. 條件明確成熟缺臨門一腳", value: "A. 條件明確成熟缺臨門一腳" },
  { label: "B. 條件明確成熟且積極", value: "B. 條件明確成熟且積極" },
  { label: "C. 條件不夠明確", value: "C. 條件不夠明確" },
  { label: "D. 不清楚狀況", value: "D. 不清楚狀況" },
  { label: "P. 無效", value: "P. 無效" },
  { label: "R. 已邀約斡旋", value: "R. 已邀約斡旋" },
  { label: "S. 以成交", value: "S. 以成交" },
];

export const locations = [
  { label: "基隆市", value: "KLU" },
  { label: "新北市", value: "TPH" },
  { label: "台北市", value: "TPE" },
  { label: "桃園市", value: "TYN" },
  { label: "新竹縣", value: "HSH" },
  { label: "新竹市", value: "HSC" },
  { label: "苗栗縣", value: "MAL" },
  { label: "台中市", value: "TXG" },
  { label: "彰化縣", value: "CWH" },
  { label: "南投縣", value: "NTO" },
  { label: "雲林縣", value: "YLH" },
  { label: "嘉義縣", value: "CHY" },
  { label: "嘉義市", value: "CYI" },
  { label: "台南市", value: "TNN" },
  { label: "高雄市", value: "KHH" },
  { label: "宜蘭縣", value: "ILN" },
  { label: "台東縣", value: "TTT" },
  { label: "花蓮縣", value: "HWA" },
  { label: "澎湖縣", value: "PEH" },
  { label: "連江縣", value: "TYC" },
];
