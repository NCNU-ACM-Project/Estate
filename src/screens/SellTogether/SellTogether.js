import * as React from 'react';
import { Box, FlatList, HStack, Button } from 'native-base';
import { Dimensions } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
// import { setLocation } from '../../store/slices/FilterSlice';

import { SearchBar, Filter, ObjectCard } from '../../components';

/**
 * Sell Together Page Component
 */
export default () => {
  // const filterData = useSelector((state) => state.filter);
  const [keyWord, setKeyWord] = React.useState('');
  const [objectData, setObjectData] = React.useState([]);
  const windowWidth = Dimensions.get('window').width;
  
  React.useEffect(() => {
    (async () => {
      const url = 'https://gist.githubusercontent.com/youmin1017/598dbbd65d1a175ded5e28481b49fca3/raw/797bf790ddefe17581bfd803572bfa683d871b14/FakeObjectData.json'
      try { 
        const response = await fetch(url);
        const json = await response.json();
        setObjectData(json);
        console.log(objectData);
      } catch(e) {
        console.log(e);
      }
    })()
  }, []);

  return (
    <Box flex={1}>
      <SearchBar
        keyWord={keyWord}
        onChangeText={(value) => setKeyWord(value)}
      />
      <HStack space={1}>
        <TabToggleButton 
          flex={1} ml={1}
          optionOne="市調"
          optionTwo="聯賣"
        />
        <TabToggleButton 
          flex={1}
          optionOne="土地"
          optionTwo="建物"
        />
        <Filter
          buttonProps={{
            mr: 1
          }}
        >
          <Filter.Location />
          <Filter.SizeRange />
          <Filter.PriceRange />
          <Filter.SortingMethod />
        </Filter>
      </HStack>
      <FlatList 
        key="@"
        data={objectData}
        keyExtractor={({id}) => "@" + id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <ObjectCard 
              alignItems="center"
              width={windowWidth/2}
              safeAreaX
              {...item}
            />
          )
        }}
      />
    </Box>
  );
}

const TabToggleButton = ({optionOne, optionTwo, ...rest}) => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <Button
      onPress={() => setToggle(!toggle)}
      {...rest}
    >
      {toggle ? optionOne : optionTwo}
    </Button>)
}