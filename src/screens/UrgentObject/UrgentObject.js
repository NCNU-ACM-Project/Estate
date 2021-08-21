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
      try { 
        const response = await fetch('/Users/youmin/Desktop/Estate/src/screens/UrgentObject/MOCK_DATA.json');
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
      {toggle ? "土地" : "建物"}
    </Button>)
}