import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CategoryList = ({ categories }) => {
  return (
    <View>
      <Text>Category List</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryList;
