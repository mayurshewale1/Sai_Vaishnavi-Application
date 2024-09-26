import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import colors from '../constant/colors';

const users = [
  { id: 1, name: 'Ananya Sharma', role: 'Supervisor', color: '#9c4dcc', image: 'https://via.placeholder.com/50' },
  { id: 2, name: 'Rahul Mehta', role: 'Contractor', color: '#f48fb1', image: 'https://via.placeholder.com/50' },
  { id: 3, name: 'Vikram Singh', role: 'Subcontractor', color: '#ff7043', image: 'https://via.placeholder.com/50' },
  { id: 4, name: 'Neha Choudhary', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 5, name: 'Ananya Sharma', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 6, name: 'Vikram Singh', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 7, name: 'Amit Patel', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 8, name: 'Amit Patel', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 9, name: 'Amit Patel', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
  { id: 10, name: 'Amit Patel', role: 'Labor', color: '#aed581', image: 'https://via.placeholder.com/50' },
];

const User = () => {
  const renderUserItem = ({ item }) => (
    <View style={styles.userRow}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <Text style={styles.userName}>{item.name}</Text>
      <View style={[styles.userRoleBadge, getBadgeStyle(item.role)]}>
        <Text style={[styles.userRoleText, getBadgeTextStyle(item.role)]}>{item.role}</Text>
      </View>
      <View style={styles.moreOptions}>
        <Text style={styles.moreOptionsText}>⋮</Text>
      </View>
    </View>
  );

  // Function to return dynamic badge styles based on role
  const getBadgeStyle = (role) => {
    switch (role) {
      case 'Supervisor':
        return {
          backgroundColor: '#e1bee7', // light purple
          borderColor: '#9c4dcc', // dark purple border
          borderWidth: 1,
        };
      case 'Contractor':
        return {
          backgroundColor: '#f8bbd0', // light pink
          borderColor: '#f48fb1', // darker pink border
          borderWidth: 1,
        };
      case 'Subcontractor':
        return {
          backgroundColor: '#ffccbc', // light orange
          borderColor: '#ff7043', // darker orange border
          borderWidth: 1,
        };
      case 'Labor':
        return {
          backgroundColor: '#e6ee9c', // light green
          borderColor: '#aed581', // darker green border
          borderWidth: 1,
        };
      default:
        return {
          backgroundColor: '#e0e0e0', // default gray
          borderColor: '#bdbdbd', // default gray border
          borderWidth: 1,
        };
    }
  };

  const getBadgeTextStyle = (role) => {
    switch (role) {
      case 'Supervisor':
        return {
          color: '#9c4dcc', // dark purple border
        };
      case 'Contractor':
        return {
          color: '#f48fb1', // darker pink border
        };
      case 'Subcontractor':
        return {
          color: '#ff7043', // darker orange border
        };
      case 'Labor':
        return {
          color: '#aed581', // darker green border
        };
      default:
        return {
          color: colors.black, // default gray border
        };
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>USER NAME</Text>
        <Text style={styles.headerText}>ROLE</Text>
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderUserItem}
      />
      <View style={{height:50}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userRoleBadge: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  userRoleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  moreOptions: {
    marginLeft: 10,
  },
  moreOptionsText: {
    fontSize: 20,
    color: colors.black,
  },
});

export default User;
