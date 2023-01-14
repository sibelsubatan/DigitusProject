/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useLayoutEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import {ArrowLeft, ArrowLeft2} from 'iconsax-react-native';
import * as styles from '@app/styles/DetailScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {GenericNavigationProps} from '@app/navigation/types';

const DetailScreen = props => {
  const {setOptions, goBack} = useNavigation<GenericNavigationProps>();

  useLayoutEffect(
    useCallback(() => {
      setOptions({
        headerShadowVisible: true,
        headerShown: true,
        headerBackTitleVisible: false,
        headerBackVisible: false,
        headerTitle: () => (
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <Image
              source={require('@src/assets/images/logo.png')}
              style={styles.headerTitle}
              resizeMode={'center'}
            />
          </View>
        ),
        headerLeft: () => (
          <Pressable onPress={() => goBack()}>
            <ArrowLeft color={'gray'} size={24} variant="Outline" />
          </Pressable>
        ),
      });
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: props.route.params.item.image}}
          style={styles.imageStyle}
        />
        <View style={styles.cardView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{props.route.params.item.title}</Text>
          </View>
          <Pressable style={styles.buttonView}>
            <Text style={styles.buttonText}>Duis aute</Text>
          </Pressable>
          <View style={styles.descView}>
            <Text style={styles.descText}>{props.route.params.item.desc}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
