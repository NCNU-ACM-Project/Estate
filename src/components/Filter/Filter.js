import * as React from 'react';
import { Popover, useDisclose, Button, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import * as filterSlice from '../../store/slices/FilterSlice';

const Filter = ({children}) => {
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
            <Button size="sm" variant="ghost">
              Cancel
            </Button>
            <Button size="sm"
              onPress={() => {
                onClose()
              }}
            >Apply</Button>
          </Button.Group>
        </Popover.Footer>
      </Popover.Content>
    </Popover>
  )
}

export default Filter;