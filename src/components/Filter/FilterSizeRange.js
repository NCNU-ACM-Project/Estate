import * as React from 'react';
import PropTypes from 'prop-types';
import { HStack, Center, Input, Text } from 'native-base';

import { useSelector, useDispatch } from 'react-redux';
import { setMinSize, setMaxSize } from '../../store/slices/FilterSlice'

const FilterSizeRange = (
  { /* Filter Size Range Props */
    firstPlaceholder = '最低',
    secondPlaceholder = '最高',
    ...rest
  } 
) => {
  const { minSize, maxSize } = useSelector((state) => state.filter)
  const dispatch = useDispatch();

  const setMinSizeHandler = (value) => {
    const num = parseInt(value, 10);
    dispatch(setMinSize(num));
  }
  const setMaxSizeHandler = (value) => {
    const num = parseInt(value, 10);
    dispatch(setMaxSize(num));
  }

  return (
    <>
      <Text p={2} bold>坪數</Text>
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
          value={minSize}
          onChangeText={setMinSizeHandler}
        />
        <Center>坪</Center>
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
          value={maxSize}
          onChangeText={setMaxSizeHandler}
        />
        <Center>坪</Center>
      </HStack>
    </>
  );
}
FilterSizeRange.propTypes = {
  firstPlaceholder: PropTypes.string,
  secondPlaceholder: PropTypes.string
}

export default FilterSizeRange;