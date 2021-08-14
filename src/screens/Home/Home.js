import * as React from 'react';
import { FlatList, Button, Box } from 'native-base';

const screens = [
  {
    title: '急售物件',
    subtitle: 'An example of using the UrgentObject.js components.',
    target: 'UrgentObject',
  },
  
];

export const Home = ({navigation}) => {
  return (
    <FlatList
      data={screens}
      renderItem={({ item }) => (
        <Button
          px={5} rounded="md"
          onPress={() => navigation.push(item.target)}
        >
            {item.title}
            {item.subtitle}
        </Button>
      )}
      keyExtractor={(item) => item.target}
    />
  )
}