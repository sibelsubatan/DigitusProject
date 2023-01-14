import {useNavigation} from '@react-navigation/native';
import React, {FC, useLayoutEffect} from 'react';
import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {GenericNavigationProps} from '@app/navigation/types';
import * as styles from '@app/styles/IntroStyle';

import {ArrowRight} from 'iconsax-react-native';
import theme from '@app/theme';

const IntroScreen: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitleAlign: 'center',
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
      headerRightContainerStyle: {
        paddingRight: 20,
      },
    });
  }, [navigation]);

  const slides = [
    {
      key: '1',
      title: require('@src/assets/images/logo.png'),
      descTitle: 'Enim ad minim',
      desc: 'Lorem ipsum dolor sit amet. Ex debitis sunt ex repudiandae enim qui maiores molestias est fugit quis. Est voluptate sunt a ducimus exercitationem ut perspiciatis iure. Est beatae repellat hic repellat voluptatum eum accusamus deleniti qui reiciendis voluptatem et doloribus fugiat qui delectus quidem et ullam itaque. Eos perferendis velit et officiis nihil sit beatae asperiores sit sunt reiciendis.,',
      child: require('@src/assets/images/intro1.jpeg'),
    },
    {
      key: '2',
      title: require('@src/assets/images/logo.png'),
      descTitle: 'Enim ad minim',
      desc: 'Lorem ipsum dolor sit amet. Ex debitis sunt ex repudiandae enim qui maiores molestias est fugit quis. Est voluptate sunt a ducimus exercitationem ut perspiciatis iure. Est beatae repellat hic repellat voluptatum eum accusamus deleniti qui reiciendis voluptatem et doloribus fugiat qui delectus quidem et ullam itaque. Eos perferendis velit et officiis nihil sit beatae asperiores sit sunt reiciendis.,',
      child: require('@src/assets/images/intro2.jpeg'),
    },
    {
      key: '3',
      title: require('@src/assets/images/logo.png'),
      descTitle: 'Enim ad minim',
      desc: 'Lorem ipsum dolor sit amet. Ex debitis sunt ex repudiandae enim qui maiores molestias est fugit quis. Est voluptate sunt a ducimus exercitationem ut perspiciatis iure. Est beatae repellat hic repellat voluptatum eum accusamus deleniti qui reiciendis voluptatem et doloribus fugiat qui delectus quidem et ullam itaque. Eos perferendis velit et officiis nihil sit beatae asperiores sit sunt reiciendis.,',
      child: require('@src/assets/images/intro3.jpeg'),
    },
  ];
  const renderItem = ({item}) => {
    const {title, desc, child, descTitle} = item;
    return (
      <View style={styles.slide}>
        <View style={styles.iconContainer}>
          <Image source={title} />
        </View>
        <View style={styles.iconContainer}>
          <Image source={child} />
        </View>
        <View>
          <Text style={styles.descTitle}>{descTitle}</Text>
          <View style={styles.desc}>
            <Text style={styles.descText}>{desc}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <ArrowRight color="gray" size={30} />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      onDone={() => navigation.navigate('Tabs')}
      renderDoneButton={renderNextButton}
      renderNextButton={renderNextButton}
    />
  );
};

export default IntroScreen;
