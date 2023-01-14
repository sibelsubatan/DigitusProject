/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useEffect, useLayoutEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import {useAppSelector} from '@app/hooks/useStoreDispatch';
import * as styles from '@app/styles/IntroStyle';
import RNProgressHud from 'progress-hud';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {GenericNavigationProps} from '../navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';

const Loading: FC = () => {
  const {userInfo, isLaunched} = useAppSelector(state => state.user);
  const {setOptions, navigate} = useNavigation<GenericNavigationProps>();
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, [setOptions]);
  useEffect(() => {
    RNProgressHud.dismiss();
    const timer = setTimeout(() => {
      if (isFocused) {
        if (userInfo && isLaunched) {
          navigate('Home', {
            timer,
          });
        }
        if (userInfo == null && isLaunched) {
          navigate('Login', {
            gestureEnabled: false,
          });
        }

        if (userInfo == null && !isLaunched) {
          navigate('Intro', {
            gestureEnabled: false,
          });
        }
      }
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [userInfo, isLaunched, navigate, isFocused]);

  return (
    <SafeAreaView style={styles.splashContainer}>
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Loading;
