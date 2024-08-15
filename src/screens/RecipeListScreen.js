import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical:40}}>
      <TouchableOpacity onPress={() => navigation.navigate('NewRecipeScreen')}>
        <Header headerText="Recipes" headerIcon="heart-o" />
      </TouchableOpacity>

     

      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order by</Text>
        {/* Recipes list */}
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({});