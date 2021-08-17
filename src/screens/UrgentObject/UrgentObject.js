import * as React from 'react';
import { Box, Text, Button, Input } from 'native-base';
import { SearchBar } from '../../components';

import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/slices/FilterSlice';

// Temp Import
import { Filter, FilterLocation } from '../../components'

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
      <Box rounded='md' alignSelf='center' bg='primary.200'>
        <Text>I am from {filterData.location}</Text>
      </Box>
      <Button
        alignSelf='center'
        onPress={() => dispatch(setLocation(keyWord))}      
      >Change Location</Button>
      <Filter>
        <Filter.Location />
      </Filter>
    </>
  );
}