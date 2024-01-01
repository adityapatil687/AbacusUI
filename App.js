import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { StatusBar } from "react-native";


const Stack = createNativeStackNavigator();

import TabDisplayContextProvider from "./context/TabDisplayContextProvider";

import Login from "./Screens/Login";
import TabNav from "./Screens/Nav/TabNav";

export default function App() {
  return (
    <TabDisplayContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ gestureEnabled: true, cardOverlayEnabled: true, ...TransitionPresets.SlideFromRightIOS,}}>
                {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> */}
                <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}} />
            </Stack.Navigator>
      </NavigationContainer>
    </TabDisplayContextProvider>
  );
}