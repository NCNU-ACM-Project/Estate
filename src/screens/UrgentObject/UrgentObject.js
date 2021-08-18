import * as React from 'react';
import { Box, Text, Button } from 'native-base';
import { SearchBar } from '../../components';

import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/slices/FilterSlice';

// Temp Import
import { Filter } from '../../components'

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
      <Filter>
        <Filter.Location />
        <Filter.SizeRange />
        <Filter.PriceRange />
        <Filter.SortingMethod />
      </Filter>
    </>
  );
}