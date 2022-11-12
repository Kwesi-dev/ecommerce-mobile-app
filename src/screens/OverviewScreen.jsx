import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from "react-native-vector-icons"
const OverviewScreen = () => {
  const [searchText, setSearchText] = React.useState("")
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Product Name" onChangeText={(e)=>setSearchText(e.target.value)} value={searchText} style={styles.searchInput}/>
          <Ionicons name="search" style={styles.searchIcon}/>
        </View>
        <View style={styles.banner}>
            <View style={styles.infoContainer}>
              <Text style={styles.bannerText}>Welcome here</Text>
              <Text style={styles.bannerText}>Order Now!</Text>
              <Text style={styles.moreText}>Get Products At Cheaper Prices</Text>
            </View>
            <Image source={require("../../assets/banner.png")} resizeMode="cover" style={styles.bannerImg}/>
        </View>
        <View style={styles.categories}>
          <Text style={{color: "#0C1A30", fontSize: 18, fontWeight: "600"}}>Categories</Text>
          <TouchableOpacity>
            <Text style={{color: "#3669C9", fontSize: 12, fontWeight: "600"}}>View All</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    backgroundColor: "#FFFFF"
  },
  searchContainer:{
    width: "100%",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20
  },
  searchIcon:{
    color: "#0C1A30",
    fontSize: 24,
  },
  searchInput:{
    fontSize: 18,
    color: "#C4C5C4",
  },
  banner:{
    width: "100%",
    height: 150,
    position: "relative",
    backgroundColor: "yellow",
    flexDirection: "row"
  },
  bannerImg:{
    width: "100%",
    height: "100%",
    position: "absolute",
    right: 0
  },
  infoContainer:{
    backgroundColor: "#3669C9",
    width: "65%",
    zIndex: 5,
    height: "100%",
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    justifyContent: "center",
    paddingLeft: 20
  },
  bannerText:{
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  moreText:{
    color: "#ffff",
    fontSize: 10,
    marginTop: 10
  },
  categories:{
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})
export default OverviewScreen