import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OverviewScreen from './OverviewScreen';
import { Ionicons } from 'react-native-vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
const Stack = createNativeStackNavigator()

const LogoTitle = () => {
  return (
    <Text style={styles.logoTitle}>EShop</Text>
  )
}
const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={OverviewScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props}/>,
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={styles.headerIcons}>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Ionicons name="notifications-outline" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.badge}>1</Text>
                </TouchableOpacity>
              </View>
                <Ionicons name="cart-outline" size={24} color="black" style={{marginRight: 18}} />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
  },
  iconContainer:{
    position: "relative",
    marginRight: 20
  },
  badge:{
    position: "absolute",
    top: -25,
    right: 0,
    fontSize: 10,
    backgroundColor: "red",
    borderRadius: 12/2,
    width: 12,
    height: 12,
    textAlign: "center",
    color: "#FFFFF"
  },
  logoTitle:{
    color: "#3669C9",
    fontSize: 20,
    fontWeight: "bold"
  }
})
export default HomeScreen