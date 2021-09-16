import React, { useState } from "react";
import {
  Divider,
  Text,
  Button,
  Modal,
  Box,
  Image,
} from "native-base";
export function News(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box pt={1}>
      <Button.Group>
        <Button
          pr={-10}
          pt={-10}
          onPress={() => setShowModal(true)}
          colorScheme="rgb(255,255,255)"
        >
          <Image source={{ uri: props.Uri }} alt="Alternate Text" size={"xl"} />
        </Button>

        <Divider orientation="vertical" />

        <Button
          pl={-10}
          alignItems="center"
          //width="56%"
          mr = {150}
          onPress={() => setShowModal(true)}
          colorScheme="rgb(255,255,255)"
        >
          <Text noOfLines={4} lineHeight={6}>{props.Context}</Text>
        </Button>
      </Button.Group>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body alignItems="center">
            <Image
              source={{ uri: props.Uri }}
              alt="Alternate Text"
              size={"xl"}
              borderRadius={10}
              alignItems="center"
            />
            <Text lineHeight={7}>{props.Context}</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}
