import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainHeader from '../src/component/drawer/mainheader';
import Registration from '../src/component/auth/registration';
import Login from '../src/component/auth/login';

enableScreens();

const AuthStack = createStackNavigator();
const MyAuthStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="MainHeader" component={MainHeader} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <MainStack.Screen name="Auth" component={MyAuthStack} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;