// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { SessionProvider } from "../utils/ctx";
// import { NavigationContainer } from '@react-navigation/native';
// import { SignIn } from './sign-in'

// const Stack = createStackNavigator();

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const loginHandler = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Login">
            
//         {isLoggedIn ? (
//           // If logged in, show the TabNavigator
//           <Stack.Screen name="Tabs" options={{ headerShown: false }}>
//             {() => (
//               <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Profile" component={ProfileScreen} />
//               </Tab.Navigator>
//             )}
//           </Stack.Screen>
//         ) : (
//           // If not logged in, show the Login screen
//           <Stack.Screen name="Login">
//             {(props) => <LoginScreen {...props} onLogin={loginHandler} />}
//           </Stack.Screen>
//         )}
//           </Stack.Navigator>
//         </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
