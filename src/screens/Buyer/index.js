import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  VStack,
  FlatList,
  ScrollView,
} from "native-base";
import { KeyInput } from "../News/KeyInput";
import { Sort } from "../News/Sort";
import { ChooseDate } from "../News/ChooseDate";
import { useSelector, useDispatch } from "react-redux";
import { resetFilter } from "../../store/slices/filter";
import Card from "./Card";

export default function App() {
  const informationData = useSelector((state) => state.information);
  const dispatch = useDispatch();
  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  dispatch(resetFilter());
  return (
    <Box bg="#fff" flex={1}>
      <ScrollView>
        <Center>
          <KeyInput Defal = "輸入姓名"/>
        </Center>
        <HStack space={8} alignItems="center"></HStack>
        <Center mt={2}>
          <VStack space={3}>
            <Card />
            <Card />
          </VStack>
        </Center>
        <Button
          onPress={() => {
            console.log(informationData);
          }}
        />
      </ScrollView>
    </Box>
  );
}
