import React, { useContext, useState } from 'react';
import { View, Text, FlatList, SectionList, Button, StyleSheet, Image } from 'react-native';
import { GlobalContext } from './GlobalContext';

const products = [
  { id: '1', name: 'T-shirt', description: 'Allen Solly Men Colorblock Polo Neck Cotton Blend Multicolor T-Shirt', price: 'Rs-1289', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/70e7c8b84c8d323aa2957aa1beb6bea9' },
  { id: '2', name: 'T-shirt', description: 'KILLER Men Colorblock Polo Neck Cotton Blend Dark Green T-Shirt', price: 'Rs-2299', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ae5bf7fd7df5a36c0569913df0657fff' },
  { id: '3', name: 'Jeans Pant', description: 'Denim jeans Men Slim Mid Rise Blue Jeans', price: 'Rs-1999', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4ba1ac21824a4a0d6733a3cc17f2249b' },
  { id: '4', name: 'Denim Jeans', description: 'Men Relaxed Fit Mid Rise Black Jeans', price: 'Rs-2599', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/da4de0203fd70d2fc539fc31c6e27b31' },
  { id: '5', name: 'Cotton Kurta', description: 'Men Solid Cotton Blend Straight Kurta (Orange)', price: 'Rs-1999', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/59c70656fcd5f5ac2a501e0220aedd29' },
  { id: '6', name: 'Smart-Watch', description: 'Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND', price: 'Rs-1379', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/58599b0c09b4f2668c0ff95524869219' },
  { id: '7', name: 'Sport Shoes', description: 'Airson ARS-MASTER-2 Sports shoes for Men Gym Training Walking Running Shoes For Men Running Shoes For Men', price: 'Rs-1998', image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/97aac314450857d93c287e6226e8cec1' },
];

const sections = [
  { title: 'T-shirt', data: products.filter(product => product.name === 'T-shirt') },
  { title: 'Jeans', data: products.filter(product => product.name.includes('Jeans')) },
  { title: 'Kurta', data: products.filter(product => product.name === 'Cotton Kurta') },
  { title: 'Watch', data: products.filter(product => product.name.includes('Watch')) },
  { title: 'Shoes', data: products.filter(product => product.name.includes('Shoes')) },
];

const ProductList = () => {
  const { dispatch } = useContext(GlobalContext);
  const [useFlatList, setUseFlatList] = useState(true);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <View style={styles.container}>
      <Button title={`Switch to ${useFlatList ? 'SectionList' : 'FlatList'}`} onPress={() => setUseFlatList(!useFlatList)} color="darkblue" />
      {useFlatList ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="Add to Cart" onPress={() => addToCart(item)} color="blue" />
                  <Button title="Favorites" onPress={() => addToFavorites(item)} color="green" />
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.product}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.buttonContainer}>
                  <Button title="Add to Cart" onPress={() => addToCart(item)} color="blue" />
                  <Button title="Favorites" onPress={() => addToFavorites(item)} color="green" />
                </View>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'pink',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  product: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductList;
