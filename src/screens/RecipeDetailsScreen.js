import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;

	console.log(item);
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginVertical: 25 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
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
						// backgroundColor: "red",
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
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
				
				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>
								<Text style={{ fontSize: 20, color:"green" }}>${item.price}</Text>
								
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									</Text>
								
				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  <View
    style={{
      backgroundColor: "rgba(255, 0, 0, 0.38)",
      paddingVertical: 26,
      borderRadius: 8,
      alignItems: "center",
      width: 150,
      // Custom styling for the first block
    }}
  >
    
    <Text style={{ fontSize: 15 , color: "white"}}>Brand</Text>
    <Text style={{ fontSize: 20, fontWeight: "400", color: "white"}}>
      {item.artist}
    </Text>
  </View>

  <View
    style={{
      backgroundColor: "rgba(0, 0, 255, 0.38)", // Example of different styling
      paddingVertical: 26,
      borderRadius: 8,
      alignItems: "center",
      width: 150,
      // Custom styling for the second block
    }}
  >
    
    <Text style={{ fontSize: 15, color: "white"}}>delivery time</Text>
    <Text style={{ fontSize: 20, fontWeight: "400", color: "white"}}>
      {item.deliverytime}
    </Text>
  </View>
</View>


							
						<Text style={{ fontSize: 20, marginVertical: 16 }}>
							{item.description}
						</Text>

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								// width: "100%",
								// backgroundColor: "green",
							}}
						>
							
							
							
						</View>

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
	<Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}>
	Included:
	</Text>

	{item.ingredients.map((ingredient, index) => {
		return (
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
						width: 20, // Pas deze waarde aan om de grootte van het icoontje te bepalen
						height: 20, // Pas deze waarde aan om de grootte van het icoontje te bepalen
						resizeMode: "contain",
						marginRight: 8, // Ruimte tussen het icoontje en de tekst
					}}
				/>
				<Text style={{ fontSize: 18 }}>
					{ingredient}
				</Text>
			</View>
		);
	})}
</View>


						{/* Recipe Steps */}

						
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
