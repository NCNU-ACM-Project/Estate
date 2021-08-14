import * as React from 'react';
import { Text, Select, CheckIcon } from 'native-base';

import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/slices/filter';

const FilterLocation = (props) => {
  const { location } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const selectHandler = (value) => {
    dispatch(setLocation(value));
  }

  return (
    <>
      <Text>縣市</Text>
      <Select
        selectedValue={location}
        minWidth={320}
        accessibilityLabel="請選擇縣市"
        placeholder="請選擇縣市"
        onValueChange={selectHandler}
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4} />,
        }}
        {...props}
      >
        {locations.map(({ label, value }) => {
          return <Select.Item label={label} value={value} key={value} />
        })}
      </Select>
    </>
  )
}

export default FilterLocation;

export const locations = [
  { label: "基隆市", value: 'KLU' },
  { label: "新北市", value: 'TPH' },
  { label: "台北市", value: 'TPE' },
  { label: "桃園市", value: 'TYN' },
  { label: "新竹縣", value: 'HSH' },
  { label: "新竹市", value: 'HSC' },
  { label: "苗栗縣", value: 'MAL' },
  { label: "台中市", value: 'TXG' },
  { label: "彰化縣", value: 'CWH' },
  { label: "南投縣", value: 'NTO' },
  { label: "雲林縣", value: 'YLH' },
  { label: "嘉義縣", value: 'CHY' },
  { label: "嘉義市", value: 'CYI' },
  { label: "台南市", value: 'TNN' },
  { label: "高雄市", value: 'KHH' },
  { label: "宜蘭縣", value: 'ILN' },
  { label: "台東縣", value: 'TTT' },
  { label: "花蓮縣", value: 'HWA' },
  { label: "澎湖縣", value: 'PEH' },
  { label: "連江縣", value: 'TYC' },
];