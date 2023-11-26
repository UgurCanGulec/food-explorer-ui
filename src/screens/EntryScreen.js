import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function EntryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{ marginTop: 30 }}
      />
      <Text style={styles.entryHeader}>
        Yemek Kâşifine Hoşgeldiniz
      </Text>
      <Text
        style={styles.entryDescription}
      >
        Malzemelerinizi seçin ve pişirmeye başlayalım.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("IngredientsScreen")}
        style={styles.entryButton}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Hadi Başlayalım
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  entryHeader: {
    color: "#f96163",
    fontSize: 25,
    fontWeight: "bold"
  },
  entryDescription: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3c444c",
    textAlign: 'center',
    marginTop: 44,
    marginBottom: 40,
  },
  entryButton: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  }
})