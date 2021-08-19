import * as React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'; 
import { 
  Box, 
  Text, 
  Image, 
  Heading, 
  Pressable, 
  HStack,
  Icon,
} from 'native-base';

const ObjectCard = (
  {
    time,
    imageUri,
    title,
    size,
    address,
    price,
    ...rest
  }
) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <Pressable onPress={() => console.log('Pressed')}>
      <Box p={2} {...rest}>
        <Text>{time}</Text>
        <Image
          source={{
            uri: imageUri,
          }}
          alt="Alternate Text"
          size={windowWidth/2 - 4}
          borderRadius={30}
        />
        <Heading size="lg">{title}</Heading>
        <Text textAlign="right">坪數：{size} 坪</Text>
        <Text>{address}</Text>
        <HStack>
          <Text color="red.500">{price}萬元起</Text>
          <Box flex={1}>
            <HeartButton px={1} alignSelf="flex-end"/>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  );
}
ObjectCard.propTypes = {
  /* Below Object detail is all Required*/
  time : PropTypes.string,
  imageUrl : PropTypes.string,
  title : PropTypes.string,
  size : PropTypes.string,
  address : PropTypes.string,
  price : PropTypes.string,
}

/* These props is just for testing */
ObjectCard.defaultProps = {
  time: "2021/8/20",
  imageUri: "https://m1.aboluowang.com/uploadfile/2017/0310/20170310050950580.webp",
  title: "五星級豪宅",
  size: "100",
  address: "台中市ＸＸ區ＸＸ路ＸＸ巷ＸＸ弄",
  price: "750"
}

export const HeartButton = ({toggleLikeHandler, /* isLike, */ ...rest}) => {
  const [isLike, setIsLike] = React.useState(false);

  return (
    <Pressable
      {...rest}
      onPress={() => setIsLike(!isLike)/*toggleLikeHandler*/}
    >
      {isLike 
        ? <Icon size="sm" color="#f43f5e" as={<FontAwesome name="heart"/>}/>
        : <Icon size="sm" color="black" as={<FontAwesome name="heart-o"/>}/> 
      }
    </Pressable>
  )
}

export default ObjectCard;