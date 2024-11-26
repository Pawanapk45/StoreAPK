import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomTab from "../navigations/appNavigation/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const UserScreen = () => {
   
    const handleSignOut = () => {
        signOut(); // Update authentication state
      };

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>User Details</Text>
      <Text style={styles.detail}>Name: {user.name}</Text>
      <Text style={styles.detail}>Email: {user.email}</Text>
      <Text style={styles.detail}>Phone: {user.phone}</Text>
      <GestureHandlerRootView>
        <TouchableOpacity onPress={handleSignOut}>
            <Text>Sign Out</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
      
    </View>
    <BottomTab/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default UserScreen;
