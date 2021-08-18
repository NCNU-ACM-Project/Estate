import * as React from 'react';
import { Text, Select, CheckIcon } from 'native-base';

import { useSelector, useDispatch } from 'react-redux';
import { setSortingMethod } from '../../store/slices/FilterSlice';

const FilterSortingMethod = (props) => {
  const { sortingMethod } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const selectHandler = (value) => {
    dispatch(setSortingMethod(value));
  }

  return (
    <>
      <Text p={2} bold>縣市</Text>
      <Select
        selectedValue={sortingMethod}
        minWidth={320}
        accessibilityLabel="請選擇排序方式"
        placeholder="請選擇排序方式"
        onValueChange={selectHandler}
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4} />,
        }}
        {...props}
      >
        {sortingMethods.map(({ label, value }) => {
          return <Select.Item label={label} value={value} key={value} />
        })}
      </Select>
    </>
  )
}

export default FilterSortingMethod;

export const sortingMethods = [
  { label: "日期升冪", value: "dateUp"},
  { label: "日期降冪", value: "dateDown"},
  { label: "坪數升冪", value: "sizeUp"},
  { label: "坪數降冪", value: "sizeDown"},
  { label: "總價升冪", value: "prizeUp"},
  { label: "總價降冪", value: "prizeDown"},
  { label: "地址升冪", value: "addressUp"},
  { label: "地址降冪", value: "addressDown"}
];