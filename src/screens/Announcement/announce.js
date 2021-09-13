import React, { useState } from "react";
import {Divider,Text,Button,Modal,Box,} from "native-base";

export default Announce = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box pt = {2}>
      <Button.Group variant="solid" isAttached>
        <Button
          onPress={() => setShowModal(true)}
          alignItems="center"
          colorScheme = "rgb(255,255,255)"
          ml = {7}
        >
          <Text> {props.Year} </Text>
          <Text color="red.400" my = {1} > {props.Month} </Text>
          <Text> {props.Day} </Text>
        </Button>

        <Divider orientation="vertical" />

        <Button
          onPress={() => setShowModal(true)}
          alignItems="center"
          colorScheme = "rgb(255,255,255)"
          mr = {150}
        >
          <Text noOfLines={4} lineHeight = {6}>{props.Content}</Text>
        </Button>
      </Button.Group>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Text lineHeight = {7}>{props.Content}</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};
