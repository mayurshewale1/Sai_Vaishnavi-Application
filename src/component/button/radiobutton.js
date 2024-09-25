import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const RememberMeToggle = () => {
  const [isRemembered, setIsRemembered] = useState(false);

  const toggleSwitch = () => setIsRemembered(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.rememberMeContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isRemembered ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isRemembered}
        />
        <Text style={styles.label}>Remember Me</Text>
      </View>
      {/* {isRemembered && <Text style={styles.infoText}>You will be remembered!</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems:'center',
    // justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: colors,
  },
  infoText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },
});

export default RememberMeToggle;