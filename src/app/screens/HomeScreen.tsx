/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useCallback, useLayoutEffect} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import {Calendar, Heart, SearchNormal1, User} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import * as styles from '@app/styles/HomeStyle';
import {Card} from 'react-native-paper';
import dayjs from 'dayjs';
import {GenericNavigationProps} from '@app/navigation/types';
import theme from '../theme';

const HomeScreen: FC = () => {
  const {navigate, setOptions} = useNavigation<GenericNavigationProps>();
  const navigation = useNavigation();

  useLayoutEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        headerShadowVisible: false,
        headerShown: true,
        headerBackTitleVisible: true,
        headerTitle: () => (
          <Image
            source={require('@src/assets/images/logo.png')}
            style={styles.headerTitle}
            resizeMode={'center'}
          />
        ),
        headerBackImage: () => <View />,
        headerRight: () => (
          <View>
            <User color="green" />
          </View>
        ),
        headerLeft: () => (
          <View>
            <SearchNormal1 color="green" />
          </View>
        ),
      });
    }, [setOptions]),
  );

  const data = [
    {
      key: '0',
      title: 'Günün Menüsü',
      image:
        'https://iasbh.tmgrup.com.tr/0c2594/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2022/04/05/lokanta-usulu-mercimek-corbasi-tarifi-altin-renginde-corba-yapmanin-puf-noktasi-1649163041288.jpg',
    },
    {
      key: '1',
      title: 'Bayram Kutlaması',
      image:
        'https://i.cnnturk.com/i/cnnturk/75/740x416/5fcb4ee42af10708f48f3f9f.jpg',
    },
    {
      key: '2',
      title: 'Digitus Anket',
      image:
        'https://www.abprojeyonetimi.com/wp-content/uploads/2016/01/Engagement-Surveys.jpg',
    },
    {
      key: '3',
      title: 'Duyuru ve Genelgeler',
      image: '',
    },
    {
      key: '4',
      title: 'Bugün Doğanlar',
      image:
        'https://im.haberturk.com/2022/01/17/ver1673077781/3316461_810x458.jpg',
    },
    {
      key: '5',
      title: 'Aramıza Katılanlar',
      image:
        'https://iblog.milliyet.com.tr/imgroot/blogv7/Blog333/2012/03/07/28/352371-3-4-71119.jpg',
    },
    {
      key: '6',
      title: 'Günün Menüsü',
      image:
        'https://iasbh.tmgrup.com.tr/0c2594/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2022/04/05/lokanta-usulu-mercimek-corbasi-tarifi-altin-renginde-corba-yapmanin-puf-noktasi-1649163041288.jpg',
    },
    {
      key: '7',
      title: 'Bayram Kutlaması',
      image:
        'https://i.cnnturk.com/i/cnnturk/75/740x416/5fcb4ee42af10708f48f3f9f.jpg',
    },
    {
      key: '8',
      title: 'Digitus Anket',
      image:
        'https://www.abprojeyonetimi.com/wp-content/uploads/2016/01/Engagement-Surveys.jpg',
    },
    {
      key: '9',
      title: 'Duyuru ve Genelgeler',
      image: '',
    },
    {
      key: '10',
      title: 'Bugün Doğanlar',
      image:
        'https://im.haberturk.com/2022/01/17/ver1673077781/3316461_810x458.jpg',
    },
    {
      key: '11',
      title: 'Aramıza Katılanlar',
      image:
        'https://iblog.milliyet.com.tr/imgroot/blogv7/Blog333/2012/03/07/28/352371-3-4-71119.jpg',
    },
  ];

  const cardData = [
    {
      id: '0',
      title: 'Enim ad minim',
      image:
        'https://iasbh.tmgrup.com.tr/0c2594/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2022/04/05/lokanta-usulu-mercimek-corbasi-tarifi-altin-renginde-corba-yapmanin-puf-noktasi-1649163041288.jpg',
      likes: 10,
      date: dayjs(new Date()).format('DD.MM.YYYY'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      title: 'Enim ad minim',
      image:
        'https://i.cnnturk.com/i/cnnturk/75/740x416/5fcb4ee42af10708f48f3f9f.jpg',
      likes: 10,
      date: dayjs(new Date()).format('DD.MM.YYYY'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      title: 'Enim ad minim',
      image:
        'https://im.haberturk.com/2022/01/17/ver1673077781/3316461_810x458.jpg',
      likes: 10,
      date: dayjs(new Date()).format('DD.MM.YYYY'),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.:)',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.scrollViewItemStyle} key={index}>
        <View style={styles.itemBorderStyle}>
          {item.image !== '' ? (
            <Image source={{uri: item.image}} style={styles.imageView} />
          ) : (
            <Image
              source={require('@src/assets/images/intro3.jpeg')}
              style={styles.imageView}
            />
          )}
        </View>
        <View style={styles.textView}>
          <Text style={styles.itemTextStyle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  const renderCardItem = ({item, index}) => {
    return (
      <Pressable
        style={styles.cardViewStyle}
        key={index}
        onPress={() => navigate('DetailScreen', {item})}>
        <Card mode="elevated" style={styles.cardStyle}>
          <Card.Cover
            source={{uri: item.image}}
            style={styles.cardCoverStyle}
          />
          <Card.Content style={theme.marginVertical10}>
            <Text style={styles.cardTitleText}>{item.title}</Text>
          </Card.Content>
          <Card.Content style={styles.cardContentView}>
            <View style={theme.directionRow}>
              <Pressable style={styles.buttonView}>
                <Text style={styles.buttonText}>Duis aute</Text>
              </Pressable>
              <View style={styles.dateView}>
                <Calendar color="#9B9CA8" />
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>
            <View style={theme.directionRow}>
              <Text style={styles.likeText}>{item.likes}</Text>
              <Heart color="#FF4C4C" />
            </View>
          </Card.Content>
        </Card>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <FlatList
          keyExtractor={item => item.key}
          data={data}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={cardData}
        renderItem={renderCardItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
