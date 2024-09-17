import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, View, useColorScheme } from 'react-native';
import MainHeader from './src/component/drawer/mainheader';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigator/constructionnav';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     setWindowWidth(Dimensions.get('window').width);
  //   };
  //   Dimensions.addEventListener('change', updateDimensions);
  //   return () => {
  //     Dimensions.removeEventListener('change', updateDimensions);
  //   };
  // }, []);


  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
  //   flex: 1,
  // };

  const setTab = (tabId, tabName) => {
    // Handle the redirection based on tabId or tabName
    console.log('Selected Tab:', tabId, tabName);
    // Example: Navigate to the desired screen
    // if (tabName === 'DASHBOARD') navigation.navigate('DashboardScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
        {/* <MainHeader setTab={setTab} /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
