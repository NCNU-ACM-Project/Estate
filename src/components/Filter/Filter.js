import * as React from 'react';
import PropTypes from 'prop-types';
import { Popover, useDisclose, Button, Icon, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { resetFilter } from '../../store/slices/FilterSlice'
const Filter = (
  {
    children,
    applyFilter,
    ...rest
  }
) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const filterData = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const resetFilterHandler = () => {
    console.log(filterData);
    dispatch(resetFilter());
  }
  
  return (
    <Popover
      {...{ isOpen, onOpen, onClose }}
      trigger={(triggerProps) => {
        return (
          <Button
            {...triggerProps}
            startIcon={<Icon size='4' color="gray.400" as={<Feather name="filter" />} />}
            variant="outline"
          >篩選</Button>
        )
      }}
    >
      <Popover.Content accessibilityLabel="hello world" borderRadius={15} {...rest}>
        <Popover.Arrow bg="#F3E2C8"/>
        <Popover.CloseButton />
        <Popover.Header bg="#F3E2C8" borderTopRadius={15}>
          <Text fontSize="md" color="black" bold alignSelf="center">請選擇篩選條件</Text>
        </Popover.Header>
        <Popover.Body>
          {children}
        </Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group>
            <Button 
              size="sm" variant="ghost"
              onPress={resetFilterHandler}
            >
              重設
            </Button>
            <Button size="sm"
              onPress={() => {
                onClose();
                applyFilter();
              }}
            >使用</Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  )
}
Filter.propTypes = {
  children: PropTypes.node,
  applyFilter: PropTypes.func,
}
Filter.defaultProps = {
  children: <></>,
  applyFilter: () => {}
}

export default Filter;
