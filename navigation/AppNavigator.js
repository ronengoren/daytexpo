import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AuthStack = createStackNavigator({ Login: LoginScreen });


const switchNavigator = createSwitchNavigator(
	{
		Main: MainTabNavigator,
		Auth: AuthStack, 
		AuthLoading: AuthLoadingScreen,
	},
	{
		initialRouteName: 'AuthLoading'
	}
);
export default createAppContainer(switchNavigator)
