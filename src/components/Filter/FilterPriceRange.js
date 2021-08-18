import * as React from 'react';
import PropTypes from 'prop-types';
import { HStack, Center, Input, Text } from 'native-base';

import { useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../store/slices/FilterSlice'

const FilterPriceRange = (
  { /* Filter Price Range Props */
    firstPlaceholder = '最小值',
    secondPlaceholder = '最大值',
    ...rest
  } 
) => {
  const dispatch = useDispatch();

  const setMinPriceHandler = (value) => {
    const num = parseInt(value, 10);
    dispatch(setMinPrice(num));
  }
  const setMaxPriceHandler = (value) => {
    const num = parseInt(value, 10);
    dispatch(setMaxPrice(num));
  }

  return (
    <>
      <Text p={2} bold>總價</Text>
      <HStack space={4} alignItems='center'>
        <Input
          keyboardType="numeric"
          flex={4}
          bg="#fff"
          borderRadius={4}
          py={2}
          fontSize={14}
          {...rest}
          placeholder={firstPlaceholder}
          onChangeText={setMinPriceHandler}
        />
        <Center>元</Center>
        <Center>～</Center>
        <Input
          keyboardType="numeric"
          flex={4}
          bg="#fff"
          borderRadius={4}
          py={2}
          fontSize={14}
          {...rest}
          placeholder={secondPlaceholder}
          onChangeText={setMaxPriceHandler}
        />
        <Center>元</Center>
      </HStack>
    </>
  );
}
FilterPriceRange.propTypes = {
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
}

export default FilterPriceRange;