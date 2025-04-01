import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useSession } from '../../utils/ctx';

export default function AppLayout() {
  const { session, isLoading } = useSession();


  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  
  if (!session) {
   
    return <Redirect href="/SignIn" />;
  }

 
  return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            headerStyle: {
              backgroundColor: "#25292e",
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
              backgroundColor: "#25292e",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  color={color}
                  size={24}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="push"
            options={{
              title: "Push",
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={
                    focused ? "information-circle" : "information-circle-outline"
                  }
                  color={color}
                  size={24}
                />
              ),
            }}
          />
        </Tabs>
      );
}


// import { Tabs } from "expo-router";
// import Ionicons from "@expo/vector-icons/Ionicons";
// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: "#ffd33d",
//         headerStyle: {
//           backgroundColor: "#25292e",
//         },
//         headerShadowVisible: false,
//         headerTintColor: "#fff",
//         tabBarStyle: {
//           backgroundColor: "#25292e",
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "home-sharp" : "home-outline"}
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="push"
//         options={{
//           title: "Push",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={
//                 focused ? "information-circle" : "information-circle-outline"
//               }
//               color={color}
//               size={24}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
