import * as React from 'react';
import { Dimensions } from 'react-native';
import { Box, Text, Image, Divider, HStack, VStack } from 'native-base';

import { ContInfoCard } from '../../components';

const ObjectDetail = ({route}) => {
  const windowWidth = Dimensions.get('window').width;
  const {
    imageUri,
    price,
    houseLayout,
    size,
    floor,
    houseType,
    current,
    face,
  } = route.params;

  return (
    <Box flex={1} p={4}>
      <HStack space={5} pb={4}>
        <Image
          borderRadius={30}
          size={windowWidth*0.45}
          alt="Image alt message"
          source={{ 
            uri: imageUri,
          }}
        />
        <VStack flex={1}>
          <Text fontSize="xl" bold>
            <Text fontSize="2xl" color="red.500">{price}萬</Text>／總價
          </Text>
          <Text fontSize="xs">含清潔費／第四台／網路</Text>
          <Text fontSize="md" color="red.500" pt={5}>
            格局：{houseLayout}{"\n"}
            坪數：{size} 坪
          </Text>
          <Text fontSize="md">
            樓層：{floor}{"\n"}
            型態：{houseType}{"\n"}
            現況：{current}{"\n"}
            朝：{face}{"\n"}
          </Text>
        </VStack>
      </HStack>
      <ContInfoCard />
    </Box>
  )
}

export default ObjectDetail;