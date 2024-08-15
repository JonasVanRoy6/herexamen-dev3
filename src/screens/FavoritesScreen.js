import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Pressable
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const FavoritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const fetchFavorites = async () => {
        try {
          const favoriteItems = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
          setFavorites(favoriteItems);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      };
  
      fetchFavorites();
    }, []);
  
    const renderItem = ({ item }) => (
      <Pressable onPress={() => navigation.navigate('RecipeDetails', { item })}>
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </Pressable>
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    card: {
      flexDirection: "row",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
      alignItems: "center",
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
    },
    price: {
      fontSize: 16,
      color: "green",
    },
  });
  
  export default FavoritesScreen;
  