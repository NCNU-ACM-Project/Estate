import {
  Button,
  FormControl,
  Select,
  HStack,
	Box,
	VStack,
	Input,
} from "native-base";
import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setAddress } from "../../../store/slices/addinformation";

const Address = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setAddress(data));
    console.log("submiting with ", data);
  };
  return (
    <Formik
      initialValues={{
        city: "",
				area:"",
				road:"",
				address:"",
      }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Box>
          <FormControl>
						<VStack space={2}>
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
                    <Select.Item label={label} value={value} key={value} />
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
                    <Select.Item label={label} value={value} key={value} />
                  );
                })}
              </Select>
            </HStack>
						<Select
                selectedValue={onSubmit.road}
                placeholder="請選擇 ( 路段 / 街 ) "
                onValueChange={handleChange("road")}
                py={1}
              >
                {locations.map(({ label, value }) => {
                  return (
                    <Select.Item label={label} value={value} key={value} />
                  );
                })}
              </Select>
							<FormControl>
            <HStack alignItems="center">
              <Input
                py={1}
                width="100%"
                onBlur={handleBlur("address")}
                placeholder="巷 / 弄 / 之 / 號"
                onChangeText={handleChange("address")}
                value={values.address}
              />
            </HStack>
          </FormControl>
							</VStack>
          </FormControl>

          <Button onPress={handleSubmit} colorScheme="pink">
            Submit
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default Address;

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
