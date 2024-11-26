// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// // <NavigationContainer>
// //     <Stack.Navigator>
// //         {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
// //         <Stack.Screen name="Todo Parts" component={TodoPart} />
// //         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
// //         {/* <Stack.Screen name="Sign In" component={SignIn} /> */}
// //         {/* <Stack.Screen name="Google Sign In" component={GoogleSignIn} /> */}
// //     </Stack.Navigator>
// // </NavigationContainer>
// //   )
// // }

// // export default App

// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';
// // import { Provider } from "react-redux";
// // import { store } from './src/redux/Store';

// // const App = ()=> {
// //   return (
// //     <Provider store={store}>
// //        <View>
// //         <TodoPart />
// //        </View>
// //     </Provider>
// // );

// // }
// // export default App;

// // import React from "react";
// // import { View, Text } from "react-native";

// // const App = () => {
// //   return (
// //     <View>
// //       <Text>HEllo world</Text>
// //     </View>
// //   )
// // }

// // export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from "react-redux";
// import { store } from './src/redux/Store';

// import HomeScreen from './src/HomeScreen';
// import NotificationScreen from './src/NotificationScreen';
// import SignIn from './src/SignIn'; // Assuming you have SignIn here
// import GoogleSignIn from './src/GoogleSignIn'; // Separate component for GoogleSignIn
// import TodoPart from './src/TodoPart';
// import NumCounter from './src/NumCounter';
// import Screen from './src/Screen';
// import TodoList from './src/TodoList';
// import Form from './src/Form';
// import foofList from './src/screens/foodList';
// import Cart from './src/screens/cart';
// import ApiScreen from './src/ApiScreen';
// import AxiosScreen from './src/AxiosScreen';
// import PostData from './src/PostData';
// import AxiosLiveData from './src/AxiosLiveData';
// import NoteItem from './src/Note';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {/* Define your screens here */}
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//           {/* <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
//           {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
//           {/* <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} /> */}
//           <Stack.Screen name="Screen" component={Screen} />
//           <Stack.Screen name="TodoList" component={TodoList} />
//           {/* <Stack.Screen name="TodoPart" component={TodoPart} /> */}
//           <Stack.Screen name="NumCounter" component={NumCounter} />
//           <Stack.Screen name="From" component={Form} />
//           <Stack.Screen name="foodList" component={foofList} />
//           <Stack.Screen name="CartItem" component={Cart}/>
//           <Stack.Screen name="ApiScreen" component={ApiScreen}/>
//           <Stack.Screen name="AxiosScreen" component={AxiosScreen}/>
//           <Stack.Screen name="LiveData" component={AxiosLiveData}/>
//           <Stack.Screen name="PostData" component={PostData}/>
//           <Stack.Screen name="NoteItem" component={NoteItem} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from "react-redux";
// import { store, persistor } from './src/redux/Store';
// import NumCounter from './src/NumCounter';
// import { PersistGate } from 'redux-persist/integration/react';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="NumCounter" component={NumCounter} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { View, Text, Image, TextInput } from 'react-native';
// import { Provider } from 'react-redux'; 
// import store,{persistor} from './src/redux/Store'; 
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
// import AppNavigation from './src/navigations/appNavigation/AppNavigation'
// import { PersistGate } from 'redux-persist/integration/react';
// import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';



// const App = () => {
  
//   return (
//     <Provider store={store}> 
//        <PersistGate loading={null} persistor={persistor}>
//         <AuthNavigation/>
//       <AppNavigation />
//     </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// import React from "react";
// import { View, Text, Button } from "react-native";

// const App =()=> {

//   return (
//     <>
//       <View>
//         <Text>Hello World</Text>
//         <Button title="Press Me" onPress={() => alert('Button Pressed')} />
//       </View>
//     </>
//   )
// }
// export default App;

import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
import store, { persistor } from './src/redux/Store';
import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
import AppNavigation from './src/navigations/appNavigation/AppNavigation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
       
        const status = await AsyncStorage.getItem('isLoggedIn');
        if (status === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error fetching login status:', error);
      } finally {
        setLoading(false); 
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
   
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* लॉगिन स्थिति के आधार पर नेविगेशन दिखाएँ */}
        {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
      </PersistGate>
    </Provider>
  );
};

export default App;



// import React from "react";
// import { AuthProvider } from "./src/navigations/AuthContext ";
// import RootNavigation from "./src/RootNavigation";

// const App = () => {
//   return (
//     <AuthProvider>
//       <RootNavigation />
//     </AuthProvider>
//   );
// };

// export default App;

