import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Platform, StyleSheet, Text, View } from "react-native";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/base";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              // tabBarButton: () => null,
              // tabBarStyle: {
              //   display: "none",
              // },
            }}
          />
          <Tab.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              headerShown: false,
              // tabBarButton: () => null,
              // tabBarStyle: {
              //   display: "none",
              // },
            }}
          />
          <Tab.Screen
            name="Main"
            component={MainNavigator}
            options={{
              headerShown: false,
              // tabBarButton: () => null,
              // tabBarStyle: {
              //   display: "none",
              // },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Maps",
        }}
      />
      <Tab.Screen
        name="Deck"
        component={DeckScreen}
        options={{
          title: "Deck",
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function SettingsNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerRight: (props) => (
            <Button
              type="clear"
              onPress={() => navigation.navigate("Settings")}
              title={"Settings"}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  settingsBar: {
    marginRight: 10,
    borderWidth: 2,
    borderColor: "black",
  },
});
