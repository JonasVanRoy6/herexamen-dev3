import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	ScrollView,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { FontAwesome } from "@expo/vector-icons";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;
	const [isFavorited, setIsFavorited] = useState(false);
  
	// Check if the item is already favorited when the screen loads
	useEffect(() => {
	  const checkFavoriteStatus = async () => {
		try {
		  const favoriteItems = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
		  setIsFavorited(favoriteItems.some(favorite => favorite.id === item.id));
		} catch (error) {
		  console.error("Error fetching favorite status:", error);
		}
	  };
	  checkFavoriteStatus();
	}, [item.id]);
  
	const toggleFavorite = async () => {
	  try {
		const favoriteItems = JSON.parse(await AsyncStorage.getItem('favorites')) || [];
		if (isFavorited) {
		  // Remove from favorites
		  const updatedFavorites = favoriteItems.filter(favorite => favorite.id !== item.id);
		  await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		} else {
		  // Add to favorites
		  favoriteItems.push(item);
		  await AsyncStorage.setItem('favorites', JSON.stringify(favoriteItems));
		}
		setIsFavorited(!isFavorited);
	  } catch (error) {
		console.error("Error updating favorites:", error);
	  }
	};
  
	return (
	  <View style={{ backgroundColor: item.color, flex: 1 }}>
		<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginVertical: 25 }}>
		  <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
			<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
		  </Pressable>
		  <Pressable onPress={toggleFavorite}>
			<FontAwesome
			  name={isFavorited ? "heart" : "heart-o"}
			  size={28}
			  color={isFavorited ? "red" : "white"}
			/>
		  </Pressable>
		</SafeAreaView>
		<View
		  style={{
			backgroundColor: "#fff",
			flex: 1,
			marginTop: 140,
			borderTopLeftRadius: 56,
			borderTopRightRadius: 56,
			alignItems: "center",
			paddingHorizontal: 16,
		  }}
		>
		  <View
			style={{
			  height: 300,
			  width: 300,
			  position: "absolute",
			  top: -150,
			}}
		  >
			<Image
			  source={item.image}
			  style={{
				width: "100%",
				height: "100%",
				resizeMode: "contain",
			  }}
			/>
		  </View>
		  <Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
			{item.name}
		  </Text>
		  <Text style={{ fontSize: 20, color:"green" }}>${item.price}</Text>
		  <View style={{ flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
			  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View
				  style={{
					backgroundColor: "rgba(255, 0, 0, 0.38)",
					paddingVertical: 26,
					borderRadius: 8,
					alignItems: "center",
					width: 150,
				  }}
				>
				  <Text style={{ fontSize: 15, color: "white"}}>Brand</Text>
				  <Text style={{ fontSize: 20, fontWeight: "400", color: "white"}}>
					{item.artist}
				  </Text>
				</View>
				<View
				  style={{
					backgroundColor: "rgba(0, 0, 255, 0.38)",
					paddingVertical: 26,
					borderRadius: 8,
					alignItems: "center",
					width: 150,
				  }}
				>
				  <Text style={{ fontSize: 15, color: "white"}}>Delivery Time</Text>
				  <Text style={{ fontSize: 20, fontWeight: "400", color: "white"}}>
					{item.deliverytime}
				  </Text>
				</View>
			  </View>
			  <Text style={{ fontSize: 20, marginVertical: 16 }}>
				{item.description}
			  </Text>
			  <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
				  Included:
				</Text>
				{item.ingredients.map((ingredient, index) => (
				  <View
					style={{
					  flexDirection: "row",
					  alignItems: "center",
					  marginVertical: 4,
					}}
					key={index}
				  >
					<Image
					  source={item.check}
					  style={{
						width: 20,
						height: 20,
						resizeMode: "contain",
						marginRight: 8,
					  }}
					/>
					<Text style={{ fontSize: 18 }}>
					  {ingredient}
					</Text>
				  </View>
				))}
			  </View>
			</ScrollView>
		  </View>
		</View>
	  </View>
	);
  };
  
  export default RecipeDetailsScreen;
  