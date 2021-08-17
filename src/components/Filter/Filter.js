import * as React from 'react';
import PropTypes from 'prop-types';
import { Popover, useDisclose, Button, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import * as FilterSlice from '../../store/slices/FilterSlice';

const Filter = (
  {
    children,
    applyFilter,
    ...rest
  }
) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const filterData = useSelector((state) => state.filter)
  const dispatch = useDispatch();
  
  return (
    <Popover
      {...{ isOpen, onOpen, onClose }}
      trigger={(triggerProps) => {
        return (
          <Button
            {...triggerProps}
            startIcon={<Icon size='6' color="gray.400" as={<Feather name="filter" />} />}
            variant="outline"
          >篩選</Button>
        )
      }}
      {...rest}
    >
      <Popover.Content accessibilityLabel="hello world" borderRadius={"xl"}>
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>Confirmation</Popover.Header>
        <Popover.Body>
          {children}
        </Popover.Body>
        <Popover.Footer justifyContent="flex-end">
          <Button.Group>
            <Button 
              size="sm" variant="ghost"
              onPress={() => { 
                onClose();
                console.log(filterData);
              }}
            >
              Cancel
            </Button>
            <Button size="sm"
              onPress={() => {
                onClose();
                applyFilter();
              }}
            >Apply</Button>
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
