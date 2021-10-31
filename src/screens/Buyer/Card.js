import React, { useState } from "react";
import { Modal, Button, Stack, Text, VStack, HStack } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import plate from "../../styles/plate";
export default function Card() {
  const informationData = useSelector((state) => state.information);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.Body>
            <VStack space={3}>
              <Text>等 級 : {informationData.data.level}</Text>
              <Text>接觸日期 : {informationData.date}</Text>
              <Text>帶看過 : {informationData.data.look}</Text>
              <Text>
                地址 : {informationData.data.city} {informationData.data.area}{" "}
                {informationData.data.address}
              </Text>
              <Text>坪數 : {informationData.num}</Text>
              <Text>價位 : {informationData.money}</Text>
              <Text>房數 : {informationData.house}</Text>
              <Text>車位 : {informationData.car}</Text>
              <Text>來源 : {informationData.data.source}</Text>
              <Text>備註 : {informationData.data.remark}</Text>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="ghost"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              colorScheme="muted"
            >
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
      >
        <HStack space={8} alignItems="center">
          <VStack>
            <Text fontSize={30} color={plate.orange}>
              {informationData.data.buyer}
            </Text>
            <Text>{informationData.data.name}</Text>
          </VStack>
          <Button
            onPress={() => handleSizeClick(size)}
            key={size}
            bg="#fff"
            border={0.5}
            colorScheme="rgb(220,220,220)"
          >
            <VStack space={2}>
              <Text>等 級 : {informationData.data.level}</Text>
              <Text>接觸日期 : {informationData.date}</Text>
              <Text>帶看過 : {informationData.look}</Text>
              <Text>
                地址 : {informationData.data.city} {informationData.data.area}
                ...
              </Text>
            </VStack>
          </Button>
        </HStack>
      </Stack>
    </>
  );
}
