import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import OrderScreen from './src/screens/OrderScreen';
import LoginScreen from './src/screens/LoginScreen'
import ServicesScreen from './src/screens/ServicesScreen'
import { Ionicons, Feather } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name === "Home"){
              return (<Ionicons name="home-outline" style={{fontSize: 20}} color={focused ? "blue" : "black"}/>)
            }
            if(route.name === "Services"){
              return (<Ionicons name="file-tray-stacked-outline" style={{fontSize: 20}} color={focused ? "blue" : "black"}/>)
            }
            if(route.name === "Order"){
              return (<Feather name="shopping-bag" style={{fontSize: 20}} color={focused ? "blue" : "black"}/>)
            }
            if(route.name === "Login"){
              return (<Ionicons name="person-outline" style={{fontSize: 20}} color={focused ? "blue" : "black"}/>)
            }

          }
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Services"
          component={ServicesScreen}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
