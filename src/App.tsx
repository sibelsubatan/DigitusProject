import Splashscreen from '@app/components/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import React, {FC, Suspense, useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar} from 'react-native';
import {navigationRef} from '@app/navigation/navigationUtils';
import {MainStackScreen} from '@app/navigation/navigator/main';

enableScreens();

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
          />
          <MainStackScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
