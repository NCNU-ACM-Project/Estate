import * as React from 'react'
import PropTypes from "prop-types";
import { Box, Text, HStack, VStack, Icon, IconButton } from 'native-base'
import { Ionicons, Feather } from '@expo/vector-icons'

const MyScheduleCard = (
  {
    area = '新莊地區',
    name = 'XXX',
    date = '5/29下午4:00',
    title = '新莊地區xx路xx號樓下見',
    message = 'xxxxxxxxxxxxxxx...',
    onSend,
    rest
  }
) => {
  return (
    <Box {...rest}>
      <HStack space={4}>
        <VStack alignItems='center'>
          <Icon size='2xl' color="black" as={<Ionicons name="person-circle-outline" />} />
          <Text fontSize='xl'>{area}</Text>
          <Text fontSize='xl'>{name}</Text>
        </VStack>
        <Box
          flex={1}
          overflow="hidden"
          borderColor="black"
          borderWidth="1"
        >
          <Text fontSize='md' color='red.500'>{date}</Text>
          <Text fontSize='lg' color='black' bold>{title}</Text>
          <Text fontSize='md' color='gray.400'>{message}</Text>
          <IconButton
            position='absolute' bottom='0' right='0'
            icon={<Icon size='sm' color='black' as={<Feather name="send" />} />}
            onPress={onSend}
          />
        </Box>
      </HStack>
    </Box>
  )
}
MyScheduleCard.propTypes = {
  name: PropTypes.string,
  area: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onSend: PropTypes.func, }
export default MyScheduleCard
