import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { GlobalContext } from './GlobalContext';

const Favorites = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const removeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={state.favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Button title="Remove from Favorites" onPress={() => removeFromFavorites(item.id)} color="#ff6347" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4', // Light background color for the container
  },
  product: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff', // White background for each item
    shadowColor: '#000', // Shadow color for elevation effect
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 3, // Elevation for Android
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10, // Rounded corners for the image
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Dark gray color for product name
  },
  price: {
    fontSize: 16,
    color: '#555', // Medium gray color for price
    marginBottom: 10,
  },
});

export default Favorites;