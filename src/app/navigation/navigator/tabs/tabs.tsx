import React, {FC, useCallback, useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/screens/HomeScreen';
import BookScreen from '@app/screens/BookScreen';
import {
  Book1,
  HambergerMenu,
  Home2,
  Notification,
  Profile2User,
  SearchNormal1,
  User,
} from 'iconsax-react-native';
import MenuScreen from '@app/screens/MenuScreen';
import PersonsScreen from '@app/screens/PersonsScreen';
import NotificationsScreen from '@app/screens/NotificationsScreen';
import theme from '@app/theme';
import {View, Image} from 'react-native';
import * as styles from '@app/styles/HomeStyle';

const Tab = createBottomTabNavigator();

const Tabs: FC = ({navigation}: any) => {
  useLayoutEffect(() => {
    navigation?.setOptions({
      headerShadowVisible: true,
      headerShown: true,
      headerBackTitleVisible: true,
      headerBackVisible: false,
      headerCenter: () => (
        <View>
          <Image
            source={require('@src/assets/images/logo.png')}
            style={styles.headerTitle}
          />
        </View>
      ),
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
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: theme.ACTIVE_BG,
        headerShown: false,
        tabBarBadgeStyle: {
          backgroundColor: theme.ICONBADGE,
          color: theme.WHITE,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Home2 color={focused ? theme.WHITE : theme.INACTIVE} />
          ),
        }}
      />

      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Book1 color={focused ? theme.WHITE : theme.INACTIVE} />
          ),
        }}
      />
      <Tab.Screen
        name="Persons"
        component={PersonsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Profile2User color={focused ? theme.WHITE : theme.INACTIVE} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Notification color={focused ? theme.WHITE : theme.INACTIVE} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HambergerMenu color={focused ? theme.WHITE : theme.INACTIVE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
