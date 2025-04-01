import { Slot } from 'expo-router';
import { SessionProvider } from '../utils/ctx';

export default function Root() {
 
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}

// // import { Stack } from "expo-router";
// import { SessionProvider } from "../utils/ctx";
// import { createStackNavigator } from "@react-navigation/stack";
// import SignIn from "./SignIn";
// import { useState, useEffect } from "react";
// import * as SecureStore from "expo-secure-store";
// import App from "./push";
// import { Tabs } from "expo-router";

// const Stack = createStackNavigator();

// export default function Root() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = SecureStore.getItem("session_token");

//     console.log("TOKEN:");
//     console.log(token);
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Set up the auth context and render our layout inside of it.
//   return (
//     <SessionProvider>
//       <Stack.Navigator initialRouteName="Login">
//         {isLoggedIn ? (
//           // If logged in, show the TabNavigator
//           <Stack.Screen name="push" options={{ headerShown: false }}>
//             {(props) => (
//               <Tabs>
//                 <Tabs.Screen name="index" options={{ title: "Home" }} />
//                 <Tabs.Screen name="push" options={{ title: "Push" }} />
//               </Tabs>
//             )}
//           </Stack.Screen>
//         ) : (
//           // If not logged in, show the Login screen
//           <Stack.Screen name="Login">
//             {(props) => <SignIn {...props} />}
//           </Stack.Screen>
//         )}
//       </Stack.Navigator>
//     </SessionProvider>
//   );
// }
