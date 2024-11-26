import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShomeHomeScreen from "../../screens/ShopHomeScreen";
import CategoriesPart from "../../screens/CategoriePart";
import AddProduct from "../../screens/AddProuct";
import CatScreen from "../../screens/CartScreen";
import ProductScreen from "../../screens/ProductScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import ProductDetails from "../../screens/ProductDetails";
import BuyItemScreen from "../../screens/BuyItemScreen";
import UserScreen from "../../screens/UserScreen";
import SearchResultsScreen from "../../screens/SearchResultsScreen";

const AppNavigation =()=>{
    const BottomTab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();

    return(
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="ShomeHomeScreen" component={ShomeHomeScreen} options={{  headerShown: false}} />
                <Stack.Screen name="CategoriesPart" component={CategoriesPart}/>
                <Stack.Screen name="AddProduct" component={AddProduct}/>
                <Stack.Screen name="CartScreen" component={CatScreen}/>
                <Stack.Screen name="ProductScreen" component={ProductScreen}/>
                <Stack.Screen name="ProductDetails" component={ProductDetails}/>
                <Stack.Screen name="BuyItemScreen" component={BuyItemScreen}/>
                <Stack.Screen name="UserScreen" component={UserScreen}/>
                <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen}/>
            </Stack.Navigator>
            {/* <Drawer.Navigator>
                <Drawer.Screen name="ShomeHomeScreen" component={ShomeHomeScreen}/>
            </Drawer.Navigator> */}
        </NavigationContainer>

    //     <NavigationContainer>
    //     <BottomTab.Navigator initialRouteName="ShomeHomeScreen">
    //       <BottomTab.Screen 
    //         name="Home" 
    //         component={ShomeHomeScreen} 
    //         options={{ headerShown: false }} 
    //       />
    //       <BottomTab.Screen 
            
    //         name="Categories" 
    //         component={CategoriesPart} 
    //       />
          
    //       <BottomTab.Screen 
    //         name="Cart" 
    //         component={CatScreen} 
    //       />
    //     </BottomTab.Navigator>
    //   </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

export default AppNavigation;


