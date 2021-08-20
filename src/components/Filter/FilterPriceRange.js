import * as React from 'react';
import PropTypes from 'prop-types';
import { HStack, Center, Input, Text } from 'native-base';

import { useDispatch, useSelector } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../store/slices/FilterSlice'

const FilterPriceRange = (
  { /* Filter Price Range Props */
    firstPlaceholder = '最小值',
    secondPlaceholder = '最大值',
    ...rest
  } 
) => {
  const { minPrice, maxPrice } = useSelector((state) => state.filter)
  const dispatch = useDispatch();

  const setMinPriceHandler = (value) => {
    dispatch(setMinPrice(value));
  }
  const setMaxPriceHandler = (value) => {
    dispatch(setMaxPrice(value));
  }

  return (
    <>
      <Text p={2} bold>總價</Text>
      <HStack space={2} alignItems='center'>
        <Input
          keyboardType="numeric"
          flex={4}
          bg="#fff"
          borderRadius={4}
          py={2}
          fontSize={14}
          {...rest}
          value={minPrice}
          placeholder={firstPlaceholder}
          onChangeText={setMinPriceHandler}
        />
        <Center>萬元</Center>
        <Center>～</Center>
        <Input
          keyboardType="numeric"
          flex={4}
          bg="#fff"
          borderRadius={4}
          py={2}
          fontSize={14}
          {...rest}
          value={maxPrice}
          placeholder={secondPlaceholder}
          onChangeText={setMaxPriceHandler}
        />
        <Center>萬元</Center>
      </HStack>
    </>
  );
}
FilterPriceRange.propTypes = {
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string,
}

export default FilterPriceRange;