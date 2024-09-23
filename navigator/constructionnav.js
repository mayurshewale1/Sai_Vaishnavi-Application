import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainHeader from '../src/component/drawer/mainheader';
import Registration from '../src/component/auth/registration';
import Login from '../src/component/auth/login';
import Projectlist from '../src/component/project/projectlist';
import Home from '../src/component/home/home';
import CreateProject from '../src/component/project/createproject';
import Createnewtasks from '../src/component/project/createproject';
import AddUser from '../src/component/user/adduser';

enableScreens();

const AuthStack = createStackNavigator();
const MyAuthStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="MainHeader" component={MainHeader} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

const ProjectStack = createStackNavigator();
const MyProjectStack = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectStack.Screen name="Projectlist" component={Projectlist} />
      <ProjectStack.Screen name="Createnewtasks" component={Createnewtasks} />
    </ProjectStack.Navigator>
  );
};

const Userstack = createStackNavigator();
const MyUserstack = () => {
  return (
    <Userstack.Navigator screenOptions={{ headerShown: false }}>
      <Userstack.Screen name="AddUser" component={AddUser} />
    </Userstack.Navigator>
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
      <MainStack.Screen name="Project" component={MyProjectStack} />
      <MainStack.Screen name="User" component={MyUserstack} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;