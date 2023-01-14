import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@app/screens/HomeScreen';
import React, {FC} from 'react';
import IntroScreen from '@app/screens/IntroScreen';
import Tabs from './tabs/tabs';
import DetailScreen from '@app/screens/DetailScreen';

const MainStack = createNativeStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{
        statusBarTranslucent: true,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name="IntroScreen" component={IntroScreen} />
      <MainStack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
        }}
      />
      <MainStack.Screen name="DetailScreen" component={DetailScreen} />
    </MainStack.Navigator>
  );
};
