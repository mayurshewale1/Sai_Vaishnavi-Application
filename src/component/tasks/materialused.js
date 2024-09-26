import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../constant/colors';

const MaterialUsed = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Material Used</Text>

      {/* First Item */}
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.materialName}>Diesel</Text>
          <Text style={styles.materialQuantityUsed}>25 Litres Used</Text>
          <Text style={styles.materialCost}>-25</Text>
        </View>
        <Text style={styles.subLabel}>Liter</Text>
        <Text style={styles.timestamp}>5:06 AM by Supervisor1</Text>
        <Text style={styles.timestamp}>June 30</Text>
      </View>

      {/* Second Item */}
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.materialName}>Cement</Text>
          <Text style={styles.materialQuantityUsed}>12 Kgs Used</Text>
          <Text style={styles.materialCost}>-12</Text>
        </View>
        <Text style={styles.subLabel}>Ambuja</Text>
        <Text style={styles.timestamp}>5:06 AM by Supervisor1</Text>
        <Text style={styles.timestamp}>June 30</Text>
      </View>

      {/* Third Item */}
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.materialName}>Cocopit</Text>
          <Text style={styles.materialQuantityUsed}>12 Kgs Used</Text>
          <Text style={styles.materialCost}>-12</Text>
        </View>
        <Text style={styles.subLabel}>Amv</Text>
        <Text style={styles.timestamp}>5:06 AM by Supervisor1</Text>
        <Text style={styles.timestamp}>June 30</Text>
      </View>
      <View style={{ height: 50 }}></View>

      {/* Add more items similarly */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '99%',
    alignSelf: 'center',
    backgroundColor: '#f4f4f9',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black
  },
  itemContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  materialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },
  materialQuantityUsed: {
    fontSize: 16,
    color: '#333',
    color: colors.black,
    fontWeight: '600'
  },
  materialCost: {
    fontSize: 16,
    color: 'red',
  },
  subLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 14,
    color: '#555',
  },
});

export default MaterialUsed;
