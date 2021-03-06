import * as React from 'react';
import { Box, FlatList, HStack, Button } from 'native-base';
import { Dimensions } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/slices/FilterSlice';

import { SearchBar, Filter, ObjectCard } from '../../components';

export const UrgentObject = () => {
  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();
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
  }, [filterData]);

  return (
    <Box flex={1}>
      <SearchBar
        keyWord={keyWord}
        onChangeText={(value) => setKeyWord(value)}
        onEndEditing={() => dispatch(setLocation(keyWord))}
        // autoFocus={true}
      />
      <HStack space={1}>
        <TabToggleButton flex={2}/>
        <Filter>
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

const TabToggleButton = (props) => {
  const [toggle, setToggle] = React.useState(true);

  return (
    <Button
      colorScheme="danger"
      variant="outline"
      width="100%"
      onPress={() => setToggle(!toggle)}
      {...props}
    >
      {toggle ? "??????" : "??????"}
    </Button>)
}