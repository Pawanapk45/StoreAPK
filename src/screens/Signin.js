// // import React, { useState } from 'react';
// // import {StyleSheet,View,Text, TextInput, SafeAreaView,Button,Alert} from 'react-native';

// // function SignIn({navigation}){
  
// //   const [userData , setuserData] = useState({
// //     Name:"",
// //     Email:"",
// //     Number:"",
// //   });

// //   const handleChange = (index , value) => {
// //     setuserData ({...userData, [index]:value});
// //   };

// //   const handleSubmit = () => {
   
// //     const phoneregex = /^[0-9]{10}$/;
// //     const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

// //   //   if(userData.Name===""){
// //   //      Alert.alert("Please Enter your Name");
// //   //   }
// //   //   if(userData.Email===""){
// //   //     Alert.alert("Please Enter your Email");
// //   //  }
// //    if(userData.Number===""){
// //     Alert.alert("Please Enter your Name");
// //     return
// //     }
// //     if(!phoneregex.test(userData.Number)){
// //       Alert.alert("enter 10 digit ")
// //       return
// //     }
// //     if(!emailregex.test(userData.Email)){
// //       Alert.alert("wrong email");
// //       return
// //     }


// //   if(userData.Name==="" || userData.Email==="" || userData.Number===""){
// //         Alert.alert("Please fill Your Form");
// //         return
// //       }
// //   // else{

// //   //   Alert.alert("Form Data", `Name: ${userData.Name}\nEmail: ${userData.Email}\nNumber: ${userData.Number}`);
// //   //   return;
// //   //   }
// //   };


// //     return(
// //       <>
// //         <View style={styles.container}>
// //           <Text style={styles.text}> Hello Student </Text>
// //         </View>
// //         <View>
// //          <SafeAreaView>
// //           <Text style={styles.label}>Name</Text>
// //              <TextInput   keyboardType="default"style={styles.input} value={userData.Name} onChangeText={(value) => handleChange("Name",value)} />
// //           <Text style={styles.label}>Email</Text>
// //              <TextInput style={styles.input}  value={userData.Email} onChangeText={(value) => handleChange("Email",value)}/>
// //           <Text style={styles.label}>Phone Number</Text>
// //              <TextInput style={styles.input}  value={userData.Number} onChangeText={(value) => handleChange("Number",value)}/>
// //              <Text style={styles.label}>Password</Text>
// //              <TextInput style={styles.input}  value={userData.Number} onChangeText={(value) => handleChange("Number",value)}/>

// //              <Button title='Submit' onPress={()=> navigation.navigate("Otp-Verifivation") }/>
// //           </SafeAreaView> 

// //           <View>
// //             <Text>Name: {userData.Name}</Text>
// //             <Text>Email: {userData.Email}</Text>
// //             <Text>Number: {userData.Number}</Text>
// //           </View>
// //         </View>
// //       </>
// //         )
// //     }


// // const styles = StyleSheet.create({
// //   container: {
// //     margin: 30,
// //     alignItems:"center",
// //     backgroundColor:"#1cc0e7",
// //     padding:20,
// //     borderRadius:20,

// //   },
// //   label:{
// //     marginLeft:20,
// //     fontSize:20,
// //   },
// //   input:{
// //     backgroundColor:"#1cc0e73b",
// //     margin:10,
// //     borderBlockColor:"black",
// //     borderWidth:2,
// //     borderRadius:10,
// //   },

// //   text:{
// //       fontSize:30,
// //       color:"#12306b",
// //       textDecorationLine:"underline",
// //       fontWeight:"900"
// //       },
// //   bigBlue: {
// //     color: 'blue',
// //     fontWeight: 'bold',
// //     fontSize: 30,
// //   },
// //   red: {
// //     color: 'red',
// //   },
// // });

// // export default SignIn;

//// email Authtication 
// import { useNavigation } from "@react-navigation/native";
// import React,{useState}  from "react";
// import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import auth from '@react-native-firebase/auth';

// const SignIn = () => {
//   const navigation= useNavigation()
   
//   const [email , setEmail] = useState('');
//   const [password , setPassword] = useState('');

//   const createUser = () => {
//     auth()
//   .createUserWithEmailAndPassword(
//     email,
//     password
//   )
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
//   }

 
//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       <ScrollView contentContainerStyle={{flexGrow: 1}}>
//         <View>
//           <Image source={require('../assests/images/waveup.png')} style={styles.waveLogo}/>
//         </View>
//         <View>
//           <Text style={styles.heading}>Welcome to QWERTY</Text>
//         </View>
         
//          <View style={styles.signLogo}>
//            <Text style={styles.signText}>Create Account</Text>
//          </View>

   
//         {/* <View style={styles.nameInputbox}>
//            <TextInput style={styles.nameInput}  placeholder="First Name"/>
//         </View> */}
  
//         <View style={styles.emailInputbox}>
//            <TextInput style={styles.emailInput} value={email}  onChangeText={text => setEmail(text)}  placeholder="Enter Email Adress"/>
//         </View>
        
//         {/* <View style={styles.phoneInputbox}>
//            <TextInput style={styles.PhoneInput}  placeholder="Enter your Number" maxLength={10} keyboardType="number-pad"/>
//         </View> */}

//         <View style={styles.passwordInputbox}>
//            <TextInput style={styles.passwordInput} value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} placeholder="Enter Password"  />
//         </View>

//         <TouchableOpacity style={styles.signBtnbox} onPress={()=> createUser()}>
//           <Text style={styles.signBtntxt}>Sign in</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialBtn}>
//           <Icon name="google-plus" style={styles.googleIcon} />
//           <Text style={styles.sociallogin}>Sign with Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialBtn}>
//           <Icon name="facebook-official" style={styles.facebookIcon} />
//           <Text style={styles.sociallogin}>Sign with Facebook</Text>
//         </TouchableOpacity>
//         <View>
//           <Image source={require('../assests/images/downWave.png')} style={styles.downWave} />
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   waveLogo: {
//     width: '100%',
//     height: 180,
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#f78da7',
//   },
//   signLogo: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: '#4776db',
//     textAlign: 'center',
//     letterSpacing: 2,
//     paddingBottom: 10,
//   },
//   signText:{
//     fontSize:35,
//     fontWeight:'bold',
//     color:'#4776db',
//     textAlign:'center',
//     letterSpacing:2,
//     paddingBottom:10,
//     borderBottomColor:'#4776db',
//     borderBottomWidth:2,
//     width:'80%',
//     margin:'auto',
//   },
//   nameInput:{
//   flexDirection:'row',
//   width:'45%'
//   },
//   nameInputbox:{
//     backgroundColor:'#ffffff',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent: 'start',
//     width:'80%',
//     margin:'auto',
//     borderRadius:20,
//     marginTop:20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   nameInput:{
//     fontSize:18,
//     marginLeft:10,
//   },
//   emailInputbox:{
//     backgroundColor:'#ffffff',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent: 'start',
//     width:'80%',
//     margin:'auto',
//     borderRadius:20,
//     marginTop:20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   emailInput:{
//     fontSize:18,
//     marginLeft:10,
//   },
//   phoneInputbox:{
//     backgroundColor:'#ffffff',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent: 'start',
//     width:'80%',
//     margin:'auto',
//     borderRadius:20,
//     marginTop:20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   PhoneInput:{
//     fontSize:18,
//     marginLeft:10,
//   },
//   passwordInputbox:{
//     backgroundColor:'#ffffff',
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent: 'start',
//     width:'80%',
//     margin:'auto',
//     borderRadius:20,
//     marginTop:20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 1,
//     shadowRadius: 2,
//     elevation: 4,
//   },
//   passwordInput:{
//     fontSize:18,
//     marginLeft:10,
//   },
//   signBtnbox:{
//         backgroundColor:'#f78da7',
//         width:'55%',
//         margin:'auto',
//         marginTop:20,
//         borderRadius:30,
//       },
//    signBtntxt:{
//         textAlign:'center',
//         fontSize:20,
//         color:'#ffffff',
//         padding:15,
//         borderRadius:100,
//       },
//         goggleIcon:{
//     color:'red',
//     fontSize:30,
//     marginHorizontal:20,
//     marginVertical:15,
//     justifyContent: 'center',
//     alignItems:'center'
//   },
//   facebookIcon:{
//     color:'blue',
//     fontSize:30,
//     marginHorizontal:20,
//     marginVertical:15,
//   },
//   sociallogin:{
//     fontSize:18,
//     color:'gray',
//     marginHorizontal:20,
//     marginVertical:15,
//     justifyContent: 'center',
//     alignItems:'center',
    
//   },
//   socialBtn:{
//         flexDirection:'row',
//         backgroundColor:'#ffffff',
//         width:'75%',
//         margin:'auto',
//         marginTop:20,
//         shadowOffset: { width: 0, height: 4},
//         shadowOpacity: 1,
//         shadowRadius: 2,
//         elevation: 4,
//         borderRadius: 20,
        
//       },
//       googleIcon:{
//         color:'red',
//         fontSize:30,
//         marginHorizontal:20,
//        marginVertical:15,
//         justifyContent: 'center',
//         alignItems:'center'
//       },
//       downWave:{
//             width:'100%',
//             height:100,
//           },
// });

// export default SignIn;


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import auth from "@react-native-firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Firebase Action Code Settings
  const actionCodeSettings = {
    url: "https://qwerty-c4865.firebaseapp.com/finishSignUp", // Replace with your app's URL
    handleCodeInApp: true,// qwerty-c4865.firebaseapp.com
  };

  // Send OTP (Email Link)
  const sendEmailOtp = () => {
    if (email) {
      auth()
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          setOtpSent(true);
          Alert.alert(
            "Email Sent",
            `A sign-in link has been sent to your email. Please check your inbox: ${email}`
          );
        })
        .catch(error => {
          console.error("Error sending email OTP:", error);
        });
    } else {
      Alert.alert("Error", "Please enter a valid email address.");
    }
  };

  // Confirm OTP (Check if the email link was clicked)
  const confirmEmailOtp = () => {
    auth()
      .isSignInWithEmailLink(email)
      .then(isValid => {
        if (isValid) {
          auth()
            .signInWithEmailLink(email)
            .then(() => {
              setOtpVerified(true);
              Alert.alert("Success", "You are successfully signed in!");
            })
            .catch(error => {
              console.error("Error verifying email OTP:", error);
            });
        } else {
          Alert.alert("Error", "Invalid or expired email link.");
        }
      })
      .catch(error => {
        console.error("Error checking email OTP:", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Image source={require("../assests/images/waveup.png")} style={styles.waveLogo} />
        </View>
        <View>
          <Text style={styles.heading}>Welcome to QWERTY</Text>
        </View>

        <View style={styles.signLogo}>
          <Text style={styles.signText}>Sign in with Email OTP</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email Address"
            keyboardType="email-address"
            editable={!otpSent} // Disable input after OTP is sent
          />
        </View>

        {/* Send OTP Button */}
        {!otpSent && (
          <TouchableOpacity style={styles.button} onPress={sendEmailOtp}>
            <Text style={styles.buttonText}>Send Email OTP</Text>
          </TouchableOpacity>
        )}

        {/* Confirm OTP Button */}
        {otpSent && !otpVerified && (
          <TouchableOpacity style={styles.button} onPress={confirmEmailOtp}>
            <Text style={styles.buttonText}>Confirm Email OTP</Text>
          </TouchableOpacity>
        )}

        {otpVerified && (
          <Text style={styles.successText}>You are successfully signed in!</Text>
        )}

        <View>
          <Image source={require("../assests/images/downWave.png")} style={styles.downWave} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  waveLogo: {
    width: "100%",
    height: 180,
  },
  heading: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#f78da7",
  },
  signLogo: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4776db",
    textAlign: "center",
    letterSpacing: 2,
    paddingBottom: 10,
  },
  signText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#4776db",
    textAlign: "center",
    letterSpacing: 2,
    paddingBottom: 10,
    borderBottomColor: "#4776db",
    borderBottomWidth: 2,
    width: "80%",
    margin: "auto",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    width: "80%",
    margin: "auto",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 4,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "#f78da7",
    width: "55%",
    margin: "auto",
    marginTop: 20,
    borderRadius: 30,
    alignSelf: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#ffffff",
    padding: 15,
  },
  successText: {
    textAlign: "center",
    fontSize: 18,
    color: "green",
    marginTop: 20,
  },
  downWave: {
    width: "100%",
    height: 100,
  },
});

export default SignIn;
