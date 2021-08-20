import * as React from 'react';
import { Box, HStack, VStack, Icon, Text } from 'native-base';
import { Ionicons, Feather } from '@expo/vector-icons'; 

const ContInfoCard = (props) => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['#F7DCB4', '#F2F2F2'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
      borderRadius={15}
      safeAreaX
      {...props}
    >
      <HStack space={4}>
        <VStack space={2}>
          <IconText
            pt={2}
            icon={<Ionicons name="location-outline"/>}
          >台中市ＸＸ區ＸＸ路ＸＸ巷ＸＸ弄</IconText>
          <IconText
            icon={<Feather name="phone-call"/>}
          >09-321131123</IconText>
          <IconText
            icon={<Feather name="mail"/>}
          >examle@email.com</IconText>
        </VStack>
        <VStack flex={1} pt={2}>
          <Icon alignSelf="center" size="4xl" as={<Ionicons name="md-person-sharp"/>}/>
          <Text alignSelf="center" fontSize="xxs">林先生</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

const IconText = ({icon, children, ...rest}) => {
  return (
    <HStack space={2} {...rest}>
      <Icon size="sm" as={icon}/>
      <Text fontSize="sm" alignSelf="center">{children}</Text>
    </HStack>
  )
}

export default ContInfoCard;