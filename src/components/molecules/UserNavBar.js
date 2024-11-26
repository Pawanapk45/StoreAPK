import React from "react";
import { View, Text, Image } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Coins from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/featurs/cartSlice/CartSliceProduct";
const UserNavBar = () => {
  const navigation = useNavigation(); 
  const cartCount = useSelector(selectCartCount);
 

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Image
          source={{
            uri: 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png',
          }}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ marginHorizontal: 10, alignContent: 'flex-start' }}>
          <Text style={{ fontSize: 10 }}>Hello, Welcome</Text>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Prince</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' ,marginRight:20}}>
        <Coins name="coins" size={25} style={{marginHorizontal: 5}}/>
       
        <View>
        <GestureHandlerRootView style={{flexDirection:'row'}}>
        
        <TouchableOpacity onPress={()=> navigation.navigate('SearchResultsScreen')}>
        <Icon name="search" style={{marginHorizontal: 5}} size={25} />
        </TouchableOpacity>
       
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <View style={{position:'relative'}} >
             <Icon name="shopping-cart" size={25} style={{ marginHorizontal: 5 }} /> 
            </View>
            {cartCount > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: 'lightpink',
                      borderRadius: 10,
                      padding: 3,
                      top: -10,
                      right: 3,
                      minWidth: 20,
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: '#000', fontSize: 12 }}>{cartCount}</Text>
                  </View>
                )}
            
          </TouchableOpacity>
        </GestureHandlerRootView>
        </View>
      </View>
    </View>
  );
};

export default UserNavBar;
