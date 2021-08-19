import * as React from 'react';
import { Center, HStack, Button } from 'native-base';

import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/slices/FilterSlice';

import { SearchBar, Filter, ObjectCard } from '../../components';

export const UrgentObject = () => {
  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = React.useState('');
  
  return (
    <>
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
      <ObjectCard />
    </>
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