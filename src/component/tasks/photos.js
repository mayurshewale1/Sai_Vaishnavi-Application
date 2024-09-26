import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import colors from '../constant/colors';

const Photos = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Photos</Text>

      {/* First Row of Photos */}
      <View style={styles.imageRow}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL or local image
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL or local image
          style={styles.image}
        />
      </View>
      <Text style={styles.timestamp}>5:06 AM by Supervisor1</Text>
      <Text style={styles.timestamp}>June 30</Text>

      {/* Second Row of Photos */}
      <View style={styles.imageRow}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL or local image
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL or local image
          style={styles.image}
        />
      </View>
      <Text style={styles.timestamp}>5:06 AM by Supervisor1</Text>
      <Text style={styles.timestamp}>June 30</Text>
      <View style={{ height: 50 }}></View>

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
    marginBottom: 10,
    color: colors.black
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  timestamp: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
});

export default Photos;
