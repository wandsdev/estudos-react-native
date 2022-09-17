import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from "react-native";
import { DetailProductScreen } from "./src/screens/DetailProductScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProducsScreen } from "./src/screens/ProductsScreen";
import { Signin } from "./src/screens/Signin";
import { Signup } from "./src/screens/Signup";
import UserInfo from "./src/screens/User/UserInfo";
import { UserPhoto } from "./src/screens/User/UserPhoto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="User" component={UserNavigation} />
    </Drawer.Navigator>
  );
}

function UserNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserInfo" component={UserInfo} />
      <Tab.Screen name="UserPhoto" component={UserPhoto} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerRight: () => (
            <Button title="Teste" onPress={() => console.log("teste")} />
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Dashboard",
            headerStyle: { backgroundColor: "#771877" },
            headerTintColor: "white",
            presentation: "formSheet",
          }}
        />
        <Stack.Screen
          name="Product"
          component={ProducsScreen}
          options={{ presentation: "formSheet" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailProductScreen}
          options={{ presentation: "formSheet" }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ presentation: "formSheet" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ presentation: "formSheet" }}
        />
        <Stack.Screen
          name="User"
          component={UserNavigation}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
