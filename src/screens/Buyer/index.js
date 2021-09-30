import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Center,
  HStack,
  VStack,
  FlatList,
  ScrollView,
} from "native-base";
import { KeyInput } from "../News/KeyInput";
import { Sort } from "../News/Sort";
import { Filter } from "../News/Filter";
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
      <Center>
        <KeyInput />
      </Center>
      <HStack space={8} alignItems="center">
        <ChooseDate name="買方租方" />
        <Sort />
      </HStack>
      <Center mt={5}>
      <Card/>
      </Center>
      <Button
        onPress={() => {
          console.log(informationData);
        }}
      />
    </Box>
  );
}
